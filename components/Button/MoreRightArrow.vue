<template>
	<NuxtLink :to="link" class="button cursor-pointer max-h-20 flex flex-wrap items-center justify-start space-x-2">
		<span class="text whitespace-nowrap text-base font-bold tracking-wider">{{ text }}</span>
		<svg class="h-10 icon" viewBox="0 0 53 44" fill="none" aria-hidden="true">
			<circle cx="30.3379" cy="22" r="21.5" stroke="currentColor" />
			<path
				d="M1 21C0.447715 21 4.82823e-08 21.4477 0 22C-4.82823e-08 22.5523 0.447715 23 1 23L1 21ZM33.7071 22.7071C34.0976 22.3166 34.0976 21.6834 33.7071 21.2929L27.3431 14.9289C26.9526 14.5384 26.3195 14.5384 25.9289 14.9289C25.5384 15.3195 25.5384 15.9526 25.9289 16.3431L31.5858 22L25.9289 27.6569C25.5384 28.0474 25.5384 28.6805 25.9289 29.0711C26.3195 29.4616 26.9526 29.4616 27.3431 29.0711L33.7071 22.7071ZM1 23L33 23L33 21L1 21L1 23Z"
				fill="currentColor"
			/>
		</svg>
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
	transform: translateX(4px);
}

.text {
	transition: transform 0.3s ease-in-out;
}

.button:hover .icon {
	transform: translateX(2px);
}

.icon {
	transition: transform 0.3s ease-in-out;
}
</style>
