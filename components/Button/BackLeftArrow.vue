<template>
	<NuxtLink :to="link" class="button cursor-pointer max-h-20 flex flex-wrap items-center justify-start space-x-2">
		<svg class="h-10 icon" viewBox="0 0 53 44" fill="none" aria-hidden="true">
			<circle cx="22" cy="22" r="21.5" transform="rotate(-180 22 22)" stroke="currentColor" />
			<path
				d="M51.3379 23C51.8902 23 52.3379 22.5523 52.3379 22C52.3379 21.4477 51.8902 21 51.3379 21L51.3379 23ZM18.6308 21.2929C18.2403 21.6835 18.2403 22.3166 18.6308 22.7071L24.9947 29.0711C25.3853 29.4616 26.0184 29.4616 26.409 29.0711C26.7995 28.6805 26.7995 28.0474 26.409 27.6568L20.7521 22L26.409 16.3431C26.7995 15.9526 26.7995 15.3195 26.409 14.9289C26.0184 14.5384 25.3853 14.5384 24.9947 14.9289L18.6308 21.2929ZM51.3379 21L19.3379 21L19.3379 23L51.3379 23L51.3379 21Z"
				fill="currentColor"
			/>
		</svg>
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
