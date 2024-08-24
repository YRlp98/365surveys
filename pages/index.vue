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
				<h1 class="text-4xl font-bold mb-8">About</h1>
				<p class="text-lg">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, atque, quidem optio qui laudantium quo
					officiis maiores exercitationem, cupiditate consequuntur nam! Perspiciatis dolores quas ipsam! Exercitationem
					amet blanditiis suscipit fuga.
				</p>
			</div>
		</section>

		<!-- Section 2: Services -->
		<section class="custom-container py-16 bg-gray-800 text-white">
			<h2 class="text-4xl font-bold mb-8">Our Services</h2>
			<p class="text-lg leading-relaxed">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac volutpat elit. Phasellus egestas sapien et
				ultricies dignissim. Sed sit amet metus ut leo fermentum tincidunt.
			</p>
		</section>

		<!-- Section 3: Contact -->
		<section class="custom-container py-16 bg-gray-700 text-white">
			<h2 class="text-4xl font-bold mb-8">Contact Us</h2>
			<p class="text-lg leading-relaxed">
				If you have any questions, feel free to reach out to us at any time. We are here to help you with all your
				needs.
			</p>
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
