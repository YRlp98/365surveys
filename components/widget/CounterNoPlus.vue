<template>
	<div>
		<h1 class="text-white text-5xl font-bold">{{ animatedFirstNumber }}/{{ animatedSecondNumber }}</h1>
		<span class="text-gray-4 text-lg font-thin">{{ title }}</span>
	</div>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp();

const props = defineProps<{
	firstNumber: number;
	secondNumber: number;
	title: string;
}>();

const animatedFirstNumber = ref(0);
const animatedSecondNumber = ref(0);

onMounted(() => {
	$gsap.to(animatedFirstNumber, {
		value: props.firstNumber,
		duration: 1,
		delay: 1,
		ease: "none",
		onUpdate: () => {
			animatedFirstNumber.value = Math.floor(animatedFirstNumber.value);
		},
	});

	$gsap.to(animatedSecondNumber, {
		value: props.secondNumber,
		duration: 1,
		delay: 1,
		ease: "none",
		onUpdate: () => {
			animatedSecondNumber.value = Math.floor(animatedSecondNumber.value);
		},
	});
});
</script>
