<template>
	<div class="overflow-x-hidden">
		<!-- Hero Section -->
		<section class="custom-wrapper hero-background h-screen pt-16">
			<div class="custom-container flex items-center justify-center">
				<!-- Logo -->
				<img src="/assets/images/Logo.svg" alt="Logo" class="h-[31rem] px-8 md:px-0-" id="logo" />
			</div>
		</section>

		<!-- Section 1: About -->
		<section class="custom-wrapper py-[11.125rem] bg-black-3">
			<div class="custom-container">
				<h2 class="text-xl font-light tracking-widest text-gray-5">About</h2>
				<h1 class="mt-6 stroked-text text-6xl font-bold uppercase">365<br />surveys</h1>
				<div class="mt-6 flex flex-wrap gap-12 justify-between items-end">
					<p class="text-gray-4 text-2xl font-normal w-2/3">
						365 surveys is a Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
						ut labore et dolore magna aliqua.
					</p>

					<ButtonMoreRightArrow class="text-gray-4" text="Learn more about us" link="/about-us" />
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp();

onMounted(() => {
	$gsap.fromTo("#logo", { opacity: 0, y: 200 }, { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" });
});
</script>

<style scoped>
.hero-background {
	background-image: linear-gradient(to bottom, rgba(30, 32, 35, 1), rgba(15, 16, 18, 0.5) 50%, rgba(30, 32, 35, 1)),
		url("/assets/images/git_test_bg.gif");
	background-size: cover;
	background-position: center;
	position: relative;
}
</style>
