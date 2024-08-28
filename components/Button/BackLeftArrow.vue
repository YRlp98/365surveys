<template>
	<NuxtLink :to="link" class="button cursor-pointer max-h-20 flex flex-wrap items-center justify-start space-x-2">
		<img class="h-10 icon" src="/assets/icons/left-arrow-eclipse-icon.svg" alt="Arrow Icon" />
		<span class="text whitespace-nowrap text-base font-bold tracking-wider">{{ text }}</span>
	</NuxtLink>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
	text: string;
	link: string;
}>();
</script>

<style scoped>
.button {
	position: relative;
	transition: background-color 0.3s ease-in-out;
}

.button:hover .text {
	transform: translateX(-4px);
}

.text {
	transition: transform 0.3s ease-in-out;
}

.button:hover .icon {
	transform: translateX(-2px);
}

.icon {
	transition: transform 0.3s ease-in-out;
}
</style>
