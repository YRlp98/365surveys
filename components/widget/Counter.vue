<template>
	<div>
		<h1 class="text-white text-5xl font-bold">{{ animatedNumber }}<span class="text-primary">+</span></h1>
		<span class="text-gray-4 text-lg font-thin">{{ title }}</span>
	</div>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp();

const props = defineProps<{
	number: number;
	title: string;
}>();

const animatedNumber = ref(0);

onMounted(() => {
	$gsap.to(animatedNumber, {
		value: props.number,
		duration: 1.25,
		ease: "none",
		onUpdate: () => {
			animatedNumber.value = Math.floor(animatedNumber.value);
		},
	});
});
</script>
