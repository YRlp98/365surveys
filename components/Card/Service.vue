<template>
	<NuxtLink class="card flex flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400 focus-visible:outline-offset-4" :to="link">
		<div class="gradient-overlay absolute inset-0 bg-black opacity-50 z-0"></div>
		<!-- Content -->
		<div class="z-10 card-content flex-grow p-10 flex flex-col justify-end text-gray-4 hover:text-gray-5">
			<!-- Title -->
			<div class="flex items-center justify-between">
				<h3 class="text-2xl font-bold tracking-widest">{{ title }}</h3>
				<Icon class="text-2xl" name="material-symbols:arrows-more-up" />
			</div>
			<!-- Description -->
			<div class="mt-6 text-base">
				{{ description }}
			</div>
		</div>
		<NuxtImg
			:src="currentImage"
			:alt="title"
			class="absolute left-0 bottom-0 z-[-1] overflow-hidden object-cover w-full h-full"
			format="webp"
			quality="82"
			sizes="sm:100vw lg:50vw"
		/>
	</NuxtLink>
</template>

<script setup lang="ts">
import { computed, defineProps, onMounted } from "vue";

const props = defineProps<{
	title: string;
	description: string;
	image: string;
	link: string;
}>();

const images = {
	stock1: "/images/stock1.webp",
	stock2: "/images/stock2.webp",
	stock3: "/images/stock3.webp",
	TrafficCounts: "/images/services/TrafficCounts.webp",
	journeyTime: "/images/services/journeyTime.webp",
	driverBehaviour: "/images/services/driverBehaviour.webp",
	droneSurveys: "/images/services/droneSurveys.webp",
	parking: "/images/services/parking.webp",
	publicTransport: "/images/services/publicTransport.webp",
	trafficSpeed: "/images/services/trafficSpeed.webp",
	turningCounts: "/images/services/turningCounts.webp",
};

const currentImage = computed(() => images[props.image]);

onMounted(() => {
	const updateCursor = ({ x, y }) => {
		document.documentElement.style.setProperty("--x", x);
		document.documentElement.style.setProperty("--y", y);
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

.card:after {
	content: "";
	position: absolute;
	inset: 0;
	border-radius: 12px;
	background: radial-gradient(
		circle at calc(var(--x) * 1px) calc(var(--y) * 1px),
		hsl(0 0% 100% / 0.15),
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
			hsl(0 0% 100% / 0.5),
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
