<template>
	<div>
		<h1 class="text-white text-5xl font-bold">
			<span v-if="type === 'fraction'">
				{{ animatedFirstNumber }}<span class="text-primary">/</span>{{ animatedSecondNumber }}
			</span>
			<span v-else> {{ animatedNumber }}<span v-if="type === 'plus'" class="text-primary">+</span> </span>
		</h1>
		<span class="text-gray-4 text-lg font-thin">{{ title }}</span>
	</div>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp();

const props = defineProps<{
	type: "plain" | "plus" | "fraction";
	firstNumber?: number;
	secondNumber?: number;
	number?: number;
	title: string;
}>();

const animatedNumber = ref(0);
const animatedFirstNumber = ref(0);
const animatedSecondNumber = ref(0);

onMounted(() => {
	if (props.type === "fraction" && props.firstNumber !== undefined && props.secondNumber !== undefined) {
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
	} else if ((props.type === "plain" || props.type === "plus") && props.number !== undefined) {
		$gsap.to(animatedNumber, {
			value: props.number,
			duration: 1,
			delay: 1,
			ease: "none",
			onUpdate: () => {
				animatedNumber.value = Math.floor(animatedNumber.value);
			},
		});
	}
});
</script>
