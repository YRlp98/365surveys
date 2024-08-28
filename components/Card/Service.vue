<template>
	<NuxtLink class="card flex flex-col" :to="link">
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
		<img
			:src="currentImage"
			alt="Project Card"
			class="absolute left-0 bottom-0 z-[-1] overflow-hidden object-cover w-full h-full"
		/>
	</NuxtLink>
</template>

<script setup lang="ts">
import { computed, defineProps, onMounted } from "vue";
import stock1 from "/assets/images/stock1.jpg";
import stock2 from "/assets/images/stock2.jpg";
import stock3 from "/assets/images/stock3.jpg";
import driverBehaviour from "/assets/images/services/driverBehaviour.jpg";
import droneSurveys from "/assets/images/services/droneSurveys.jpg";
import parking from "/assets/images/services/parking.jpg";
import publicTransport from "/assets/images/services/publicTransport.jpg";
import trafficSpeed from "/assets/images/services/trafficSpeed.jpg";
import turningCounts from "/assets/images/services/turningCounts.jpg";

const props = defineProps<{
	title: string;
	description: string;
	image: string;
	link: string;
}>();

const images = {
	stock1,
	stock2,
	stock3,
	driverBehaviour,
	droneSurveys,
	parking,
	publicTransport,
	trafficSpeed,
	turningCounts,
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
