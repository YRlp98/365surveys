<template>
	<div class="min-h-screen flex flex-col bg-black-3">
		<!-- Hero Section -->
		<section class="custom-wrapper flex-1 pt-32 pb-20">
			<div class="custom-container flex flex-col">
				<!-- Title -->
				<div id="page-title" class="flex items-center text-blue-400 space-x-1.5">
					<icon class="text-2xl" name="hugeicons:study-lamp" />
					<h1 class="text-xl font-bold">Case Studies</h1>
				</div>

				<p id="description" class="text-gray-4 text-xl mt-20">
					Explore our journey through real-world projects that highlight our expertise and dedication. Each case study
					showcases how we've tackled unique challenges, delivered tailored solutions, and driven success for our
					clients. From initial strategy to final implementation, discover the impact of our work and the stories behind
					the results.
				</p>

				<!-- Content Wrapper -->
				<div id="content" class="pt-20 flex-1">
					<CardCaseStudies id="case-slide" :cards="cards" />
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp();

const cards = [
	{
		title: "A382 Drumbridges to Newton Abbot",
		description: "Production of CAD modelling, simulations and rendering for mechanical and civil applications.",
		link: "/case-studies/A382-Drumbridges-to-Newton-Abbot",
	},
	{
		title: "A360 Traffic Management - Part of Stonehenge Amesbury to Berwick Down",
		description:
			"The A303 Stonehenge project remains as one of the most complex and sensitive projects investigated in the UK in recent history. Our experts supported the project construction team with highly detailed data and analysis to inform strategic decision making.",
		link: "/case-studies/A360-Traffic-Management-Part-of-Stonehenge-Amesbury-to-Berwick-Down",
	},
	{
		title: "A64 Traffic Management",
		description: "Production of CAD modelling, simulations and rendering for mechanical and civil applications.",
		link: "#",
	},
	{
		title: "Drone example",
		description: "Production of CAD modelling, simulations and rendering for mechanical and civil applications.",
		link: "#",
	},
];

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
