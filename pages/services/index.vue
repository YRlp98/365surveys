<template>
	<div class="overflow-hidden bg-black-3">
		<!-- Hero Section -->
		<section class="custom-wrapper pt-32 pb-72">
			<div class="custom-container flex flex-col">
				<!-- Title -->
				<div id="page-title" class="flex items-center text-blue-400 space-x-1.5">
					<icon class="text-2xl" name="material-symbols:home-repair-service-outline-sharp" />
					<h1 class="text-xl font-bold">Services</h1>
				</div>

				<p id="description" class="text-gray-4 text-xl mt-20">
					We deliver a wide range of solutions to support and answer transportation challenges. We don’t just undertake
					surveys (although we can), we deliver an end to end solution from defining problems or opportunities to
					embedding solutions and monitoring how they perform. Our team are hugely experienced and offer a wide range of
					services to support you. Take a look at what we offer.
				</p>

				<!-- Content Wrapper -->
				<div id="content" class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-20">
					<CardService
						v-for="service in serviceCards"
						:key="service.link"
						class="h-[25rem]"
						:title="service.title"
						:description="service.description"
						:image="service.image"
						:link="service.link"
					/>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import services from "~/data/services.json";

const { $gsap } = useNuxtApp();
const serviceCards = Object.entries(services).map(([slug, service]) => ({
	...service,
	link: `/services/${slug}`,
}));

onMounted(() => {
	$gsap.fromTo(
		"#page-title",
		{ opacity: 0, x: -100 },
		{ delay: 0.5, opacity: 1, x: 0, duration: 1.5, ease: "power3.out" }
	);

	$gsap.fromTo(
		"#description",
		{ opacity: 0, y: -50 },
		{ delay: 0.5, opacity: 1, y: 0, duration: 1.75, ease: "power3.out" }
	);

	$gsap.fromTo("#content", { opacity: 0 }, { delay: 0.5, opacity: 1, duration: 1.5, ease: "power3.out" });

	// Cards Animation
	// const cards = document.querySelectorAll(".card");
	// cards.forEach((card, index) => {
	// 	$gsap.fromTo(
	// 		card,
	// 		{ opacity: 0, y: 150 },
	// 		{
	// 			opacity: 1,
	// 			y: 0,
	// 			duration: 1,
	// 			ease: "power3.out",
	// 			scrollTrigger: {
	// 				trigger: card,
	// 				start: "top 140%",
	// 				toggleActions: "play none none none",
	// 				scrub: 1,
	// 			},
	// 		}
	// 	);
	// });
});

useSeoMeta({
	description:
		"Explore a wide range of transportation services including traffic counts, driver behavior analysis, journey times, and drone surveys. 365 Surveys offers expert solutions for all your transport data needs.",
	ogTitle: "365 Surveys - Our Services",
	ogDescription:
		"Discover our expert transport data services, from traffic counts to public transport analysis. 365 Surveys provides comprehensive solutions for transportation challenges.",
	ogImage: "https://365Surveys.co.uk/logo.png",
	ogUrl: "https://365Surveys.co.uk/services",
	twitterTitle: "365 Surveys - Services",
	twitterDescription:
		"365 Surveys offers a variety of transportation data services, including traffic counts, driver behavior, drone surveys, and more.",
	twitterImage: "https://365Surveys.co.uk/logo.png",
	twitterCard: "summary_large_image",
});

useHead({
	title: "365 Surveys - Services",
	meta: [
		{
			name: "description",
			content: "365 SURVEYS specialises in transport data, from collection and monitoring to test plans and analytics.",
		},
		{
			name: "viewport",
			content: "width=device-width, initial-scale=1.0",
		},
		{
			name: "robots",
			content: "index, follow",
		},
	],
	htmlAttrs: {
		lang: "en",
	},
	link: [
		{
			rel: "icon",
			type: "image/png",
			href: "/favicon.png",
		},
	],
});
</script>

<style scoped></style>
