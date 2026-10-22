<template>
	<NuxtLink
		:to="link"
		:role="disabled ? 'button' : undefined"
		:tabindex="disabled ? 0 : undefined"
		:aria-disabled="disabled ? 'true' : undefined"
		class="card flex flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400 focus-visible:outline-offset-4"
		@click.capture="handleActivation"
		@keydown.enter="handleActivation"
		@keydown.space="handleActivation"
	>
		<div class="gradient-overlay absolute inset-0 bg-black opacity-50 z-0"></div>
		<!-- Content -->
		<div class="z-10 card-content flex-grow p-10 flex flex-col justify-end text-gray-4 hover:text-gray-5">
			<!-- Title -->
			<div class="flex items-center justify-between">
				<h3 class="text-2xl font-bold tracking-widest">{{ title }}</h3>
				<Icon class="text-2xl" name="material-symbols:arrows-more-up" />
			</div>
			<!-- Description -->
			<div class="mt-6 text-base line-clamp-2">
				{{ description }}
			</div>
		</div>
		<NuxtImg
			:src="image"
			:alt="title"
			class="absolute left-0 bottom-0 z-[-1] overflow-hidden object-cover w-full h-full"
			format="webp"
			quality="82"
			sizes="sm:100vw lg:50vw"
		/>
	</NuxtLink>
</template>

<script setup lang="ts">
import { onMounted, withDefaults } from "vue";

const props = withDefaults(
	defineProps<{
		title: string;
		description: string;
		image: string;
		link: string;
		disabled?: boolean;
	}>(),
	{ disabled: false }
);
const emit = defineEmits<{ activate: [] }>();

function handleActivation(event: MouseEvent | KeyboardEvent) {
	if (!props.disabled) return;

	event.preventDefault();
	emit("activate");
}

onMounted(() => {
	const updateCursor = (event: PointerEvent) => {
		document.documentElement.style.setProperty("--x", String(event.clientX));
		document.documentElement.style.setProperty("--y", String(event.clientY));
	};

	document.body.addEventListener("pointermove", updateCursor);
});
</script>

<style scoped>
.card {
	backdrop-filter: blur(8px);
	border-radius: 12px;
	position: relative;
	transition: background 0.1s;
	overflow: hidden;
	cursor: pointer;
}

.card:hover {
	--active: 1;
}

.card:hover .card-content {
	color: #93c5fd;
}

.card:after {
	content: "";
	position: absolute;
	inset: 0;
	border-radius: 12px;
	background: radial-gradient(
		circle at calc(var(--x) * 1px) calc(var(--y) * 1px),
		rgb(147 197 253 / 0.22),
		transparent 15vmin
	);
	background-attachment: fixed;
	opacity: var(--active, 0);
	transition: opacity 0.2s;
	pointer-events: none;
}

.card:before {
	content: "";
	position: absolute;
	inset: 0;
	border-radius: 8px;
	background: radial-gradient(
			circle at calc(var(--x) * 1px) calc(var(--y) * 1px),
			rgb(147 197 253 / 0.6),
			transparent 15vmin
		),
		transparent;
	background-attachment: fixed;
	pointer-events: none;
	mask: linear-gradient(white, white) 50% 0 / 100% 4px no-repeat,
		linear-gradient(white, white) 50% 100% / 100% 4px no-repeat,
		linear-gradient(white, white) 0 50% / 4px 100% no-repeat,
		linear-gradient(white, white) 100% 50% / 4px 100% no-repeat;
}

.gradient-overlay {
	background-image: linear-gradient(to bottom, rgba(30, 32, 35, 0.8), rgba(15, 16, 18, 1));
}
</style>
