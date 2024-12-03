<template>
	<div class="container">
		<!-- Slides -->
		<CardService
			v-for="(slide, index) in slides"
			:key="index"
			:title="slide.title"
			:description="slide.description"
			:image="slide.image"
			:link="slide.link"
			:data-slide="index + 1"
			class="slide cursor-pointer transition-opacity duration-700 ease-out"
			:class="{ 'slide--active': currentIndex === index, prev: prevIndex === index, next: nextIndex === index }"
			@click="setActiveSlide(index)"
			@mouseover="onHover"
			@mouseleave="onHoverLeave"
		/>
	</div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const slides = [
	{
		title: "Drone surveys",
		description: "Traffic count and movement analytics, video, photogrammetry and LIDAR",
		image: "droneSurveys",
	},
	{
		title: "Traffic Counts",
		description: "Production of CAD modelling, simulations and rendering for mechanical and civil applications",
		image: "TrafficCounts",
	},
	{
		title: "Driver behaviour",
		description: "Monitoring and analysis of driver behaviours using discrete methods and experienced experts",
		image: "driverBehaviour",
	},
];

const currentIndex = ref(0);
const intervalId = ref(null);

const prevIndex = computed(() => (currentIndex.value - 1 + slides.length) % slides.length);
const nextIndex = computed(() => (currentIndex.value + 1) % slides.length);

const setActiveSlide = (index) => {
	currentIndex.value = index;
	resetTimer();
	updateSlides();
};

const updateSlides = () => {
	let slidesElements = document.querySelectorAll(".slide");
	if (!slidesElements) return;

	slidesElements.forEach((slide, index) => {
		slide.classList.remove("prev", "next");
		if (index === currentIndex.value) {
			slide.classList.add("slide--active");
		} else if (index === prevIndex.value) {
			slide.classList.add("prev");
		} else if (index === nextIndex.value) {
			slide.classList.add("next");
		}
	});
};

const startTimer = () => {
	intervalId.value = setInterval(() => {
		currentIndex.value = (currentIndex.value + 1) % slides.length;
		updateSlides();
	}, 8000);
};

const stopTimer = () => {
	if (intervalId.value) {
		clearInterval(intervalId.value);
		intervalId.value = null;
	}
};

const resetTimer = () => {
	stopTimer();
	startTimer();
};

const onHover = () => {
	stopTimer();
};

const onHoverLeave = () => {
	startTimer();
};

onMounted(() => {
	updateSlides();
	startTimer();
});

onUnmounted(() => {
	if (intervalId) clearInterval(intervalId);
});
</script>

<style scoped>
.container {
	display: flex;
	flex-flow: column;
	justify-content: center;
	width: 100%;
	height: 400px;
	position: relative;
}

.slider {
	position: relative;
	width: 100%;
	height: 100%;
}

.slide {
	position: absolute;
	top: 15%;
	right: 10%;
	width: 80%;
	height: 70%;
	transition: all 0.7s ease-out;
}

.slide--active {
	opacity: 1;
	z-index: 9;
}

.prev,
.next {
	opacity: 0.3;
}

.prev {
	transform: translate(0, -30%) scale(0.8);
}

.next {
	transform: translate(0, 30%) scale(0.8);
}
</style>
