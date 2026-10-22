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
			:disabled="currentIndex !== index"
			:data-slide="index + 1"
			class="slide cursor-pointer transition-opacity duration-700 ease-out"
			:class="{ 'slide--active': currentIndex === index, prev: prevIndex === index, next: nextIndex === index }"
			@activate="setActiveSlide(index)"
			@mouseover="onHover"
			@mouseleave="onHoverLeave"
		/>
	</div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import services from "~/data/services.json";

const featuredSlugs = ["drone-surveys", "traffic-counts", "driver-behaviour"] as const;
const slides = featuredSlugs.map((slug) => ({ ...services[slug], link: `/services/${slug}` }));

const currentIndex = ref(0);
let intervalId: ReturnType<typeof setInterval> | undefined;

const prevIndex = computed(() => (currentIndex.value - 1 + slides.length) % slides.length);
const nextIndex = computed(() => (currentIndex.value + 1) % slides.length);

const setActiveSlide = (index: number) => {
	currentIndex.value = index;
	resetTimer();
};

const startTimer = () => {
	stopTimer();
	intervalId = setInterval(() => {
		currentIndex.value = (currentIndex.value + 1) % slides.length;
	}, 8000);
};

const stopTimer = () => {
	if (intervalId) {
		clearInterval(intervalId);
		intervalId = undefined;
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
	startTimer();
});

onUnmounted(stopTimer);
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
