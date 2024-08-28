<template>
	<div class="min-h-screen flex flex-col bg-black-3">
		<!-- Hero Section -->
		<section class="custom-wrapper flex-1 pt-32 pb-20">
			<div class="custom-container flex flex-col">
				<!-- Title -->
				<div id="page-title" class="flex items-center text-gray-4 space-x-1.5 mb-8">
					<icon class="text-2xl" name="hugeicons:study-lamp" />
					<h1 class="text-xl font-bold">Case Studies</h1>
				</div>

				<!-- Content Wrapper -->
				<div id="content" class="pt-20 flex-1">
					<CardCaseStudiesFull />
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp();

onMounted(() => {
	$gsap.fromTo(
		"#page-title",
		{ opacity: 0, x: -100 },
		{ delay: 0.5, opacity: 1, x: 0, duration: 1.5, ease: "power3.out" }
	);

	$gsap.fromTo("#content", { opacity: 0, y: 100 }, { delay: 0.5, opacity: 1, y: 0, duration: 1.5, ease: "power3.out" });
});
</script>

<style scoped></style>
