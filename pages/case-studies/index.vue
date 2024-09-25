<template>
	<div class="min-h-screen flex flex-col bg-black-3">
		<!-- Hero Section -->
		<section class="custom-wrapper flex-1 pt-32 pb-20">
			<div class="custom-container flex flex-col">
				<!-- Title -->
				<div id="page-title" class="flex items-center text-gray-4 space-x-1.5">
					<icon class="text-2xl" name="hugeicons:study-lamp" />
					<h1 class="text-xl font-bold">Case Studies</h1>
				</div>

				<p class="text-gray-4 text-xl mt-20">
					Explore our journey through real-world projects that highlight our expertise and dedication. Each case study
					showcases how we've tackled unique challenges, delivered tailored solutions, and driven success for our
					clients. From initial strategy to final implementation, discover the impact of our work and the stories behind
					the results.
				</p>

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

useSeoMeta({
	description:
		"Explore our real-world case studies that showcase how 365 Surveys solved transportation challenges with tailored data solutions and expert analysis.",
	ogTitle: "365 Surveys - Case Studies",
	ogDescription:
		"Discover real-world projects where 365 Surveys provided expert transportation data solutions. Learn how we've tackled complex challenges and driven success for our clients.",
	ogImage: "https://365Surveys.co.uk/logo.png",
	ogUrl: "https://365Surveys.co.uk/case-studies",
	twitterTitle: "365 Surveys - Case Studies",
	twitterDescription:
		"Explore our case studies showcasing transportation solutions, expert analysis, and success stories. Learn how we've helped clients with unique challenges.",
	twitterImage: "https://365Surveys.co.uk/logo.png",
	twitterCard: "https://365Surveys.co.uk/logo.png",
});

useHead({
	title: "365 Surveys - Case Studies",
	meta: [
		{
			name: "description",
			content:
				"365 Surveys presents real-world case studies highlighting tailored data solutions, expert transportation analysis, and success stories.",
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
