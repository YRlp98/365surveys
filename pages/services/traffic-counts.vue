<template>
	<div class="overflow-hidden bg-black-3">
		<!-- Hero Section -->
		<section class="custom-wrapper hero-background h-screen pt-32">
			<div class="custom-container flex flex-col">
				<!-- Path -->
				<div id="page-path" class="flex items-center text-gray-4 space-x-1.5 mb-8">
					<icon class="text-2xl" name="material-symbols:home-repair-service-outline-sharp" />
					<NuxtLink class="text-xl font-bold" to="/services">Services</NuxtLink>
					<h3 id="page-title" class="text-gray-5 text-sm font-thin mt-1">/ {{ service.title }}</h3>
				</div>

				<div class="flex items-center justify-center h-full mb-[15%]">
					<!-- Title -->
					<h1 id="hero-title" class="text-gray-5 text-5xl font-bold">{{ service.title }}</h1>

					<!-- Scroll -->
					<WidgetScroll id="hero-scroll" class="absolute bottom-12" />
				</div>
			</div>
		</section>

		<!-- Content Section -->
		<section class="custom-wrapper pt-24 pb-[320px]">
			<div id="content-section" class="custom-container flex flex-col">
				<!-- Content -->
				<div class="flex flex-col text-white text-base space-y-8">
					<!-- Image and Description -->
					<div class="flex flex-col md:flex-row space-y-8 md:space-y-0 gap-8 justify-between items-start">
						<!-- Left Side -->
						<div class="md:w-1/2">
							<NuxtImg class="rounded-xl" :src="service.image" :alt="service.imageAlt" format="webp" quality="82" sizes="sm:100vw md:50vw" />
						</div>
						<!-- Right Side -->
						<div class="md:w-1/2">
							<p class="text-3xl font-bold">{{ service.summary }}</p>
							<p class="mt-8 text-gray-4">{{ service.description }}</p>
						</div>
					</div>

					<section aria-labelledby="traffic-count-approach" class="space-y-5 pt-4">
						<h2 id="traffic-count-approach" class="text-2xl font-bold">{{ service.detailHeading }}</h2>
						<p v-for="paragraph in service.details" :key="paragraph">{{ paragraph }}</p>
					</section>

					<section aria-labelledby="traffic-count-benefits" class="space-y-5">
						<h2 id="traffic-count-benefits" class="text-2xl font-bold">What traffic counts can help you understand</h2>
						<ul class="list-disc space-y-5 pl-6 marker:text-blue-400">
							<li v-for="benefit in service.benefits" :key="benefit.title" class="pl-2">
								<p class="font-bold text-white">{{ benefit.title }}</p>
								<p class="mt-1 text-gray-4">{{ benefit.text }}</p>
							</li>
						</ul>
					</section>

					<p class="text-gray-4">{{ service.closing }}</p>
				</div>

				<ButtonBackLeftArrow
					id="back-button"
					class="text-gray-5 justify-end mt-[10.25rem]"
					text="CHECK OTHER SERVICES"
					link="/services"
				/>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import services from "~/data/services.json";

const { $gsap } = useNuxtApp();
const service = services["traffic-counts"];

useSeoMeta({
	title: `${service.title} | 365 Surveys`,
	description: service.description,
	ogTitle: `${service.title} | 365 Surveys`,
	ogDescription: service.summary,
	ogImage: `https://365Surveys.co.uk${service.image}`,
	ogUrl: "https://365Surveys.co.uk/services/traffic-counts",
	twitterTitle: `${service.title} | 365 Surveys`,
	twitterDescription: service.summary,
	twitterImage: `https://365Surveys.co.uk${service.image}`,
	twitterCard: "summary_large_image",
});

onMounted(() => {
	//* Hero section animations
	$gsap.fromTo(
		"#page-path",
		{ opacity: 0, x: -100 },
		{ delay: 0.5, opacity: 1, x: 0, duration: 1.5, ease: "power3.out" }
	);

	$gsap.fromTo(
		"#page-title",
		{ opacity: 0, y: 5 },
		{ delay: 1.5, opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
	);

	$gsap.fromTo(
		"#hero-title",
		{ opacity: 0, y: 100 },
		{ delay: 0.5, opacity: 1, y: 0, duration: 1, ease: "power3.out" }
	);

	$gsap.fromTo(
		"#hero-scroll",
		{ opacity: 0, y: -100 },
		{ delay: 0.5, opacity: 1, y: 0, duration: 1, ease: "power3.out" }
	);
	//* ==========================

	//* Content Section Animations
	$gsap.from("#content-section", {
		scrollTrigger: {
			trigger: "#content-section",
			start: "top bottom",
			scrub: 1,
		},
		y: 50,
		opacity: 0,
		duration: 1,
		ease: "power3.out",
	});

	$gsap.from("#back-button", {
		scrollTrigger: {
			trigger: "#back-button",
			start: "top bottom",
			end: "center 70%",
			scrub: 1,
		},
		x: 50,
		opacity: 0,
		duration: 1,
		ease: "power3.out",
	});
	//* ==========================
});
</script>

<style scoped>
.hero-background {
	background-image: linear-gradient(to bottom, rgba(30, 32, 35, 1), rgba(15, 16, 18, 0.5) 50%, rgba(30, 32, 35, 1)),
		url("/images/services/TrafficCounts.webp");
	background-size: cover;
	background-position: center;
	position: relative;
}
</style>
