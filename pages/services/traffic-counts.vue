<template>
	<div class="overflow-hidden bg-black-3">
		<!-- Hero Section -->
		<!-- TODO: Copy this section based on the case study page: wrap and scroll bar -->
		<section class="custom-wrapper hero-background h-screen pt-32">
			<div class="custom-container flex flex-col">
				<!-- Path -->
				<div id="page-path" class="flex items-center text-gray-4 space-x-1.5 mb-8">
					<icon class="text-2xl" name="material-symbols:home-repair-service-outline-sharp" />
					<NuxtLink class="text-xl font-bold" to="/services">Services</NuxtLink>
					<h3 id="page-title" class="text-gray-5 text-sm font-thin mt-1">/ {{ currentPage }}</h3>
				</div>

				<div class="flex items-center justify-center h-full mb-[15%]">
					<!-- Title -->
					<h1 id="hero-title" class="text-gray-5 text-5xl font-bold">Traffic Counts</h1>

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
							<NuxtImg class="rounded-xl" src="/images/services/TrafficCounts.webp" alt="Traffic Counts" format="webp" quality="82" sizes="sm:100vw md:50vw" />
						</div>
						<!-- Right Side -->
						<div class="md:w-1/2">
							<p class="text-3xl font-bold">Video analysis of junctions to measure performance and identify patterns</p>
						</div>
					</div>

					<p>
						Traffic counts show how many people use a road, junction or access point, and how that activity changes
						throughout the day. We can collect data by vehicle type and agreed time interval, giving you a useful
						baseline for transport assessments, scheme design and ongoing monitoring.
					</p>

					<p>
						Our team can help define survey locations, dates, time periods and classifications around the question you
						need to answer. The results are presented in a clear format so you can compare locations, identify busy
						periods and use the evidence in your next project decision.
					</p>

					<div class="space-y-5 pt-4">
						<h2 class="text-2xl font-bold">A survey built around your question</h2>
						<p>
							Every site has different data needs. We can agree the count points, survey dates, interval lengths and
							vehicle categories with you before collection, so the survey captures the information your assessment
							requires. Where useful, traffic counts can be planned alongside other transport surveys for a fuller view
							of activity at a location.
						</p>
						<p>
							The delivered data can help compare roads, approaches or periods and provide a dependable record for
							design work, planning submissions and monitoring. We will confirm the reporting format and scope with you
							so the results are straightforward to interpret and ready to use in your project.
						</p>
					</div>
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
const route = useRoute();
const { $gsap } = useNuxtApp();

const currentPage = computed(() => {
	const routeName = route.name ? route.name.toString() : "";
	const pageTitle = routeName.split("-").slice(1).join(" ");
	return pageTitle ? pageTitle.replace(/-/g, " ") : "Page";
});

useSeoMeta({
	title: "Traffic Counts | 365 Surveys",
	description: "Traffic count surveys provide clear data on road and junction use, by time period and vehicle type.",
	ogTitle: "Traffic Counts | 365 Surveys",
	ogDescription: "Understand how roads and junctions are used with tailored traffic count surveys from 365 Surveys.",
	ogImage: "https://365Surveys.co.uk/images/services/TrafficCounts.webp",
	ogUrl: "https://365Surveys.co.uk/services/traffic-counts",
	twitterTitle: "Traffic Counts | 365 Surveys",
	twitterDescription: "Clear traffic count data to support transport assessments, design and monitoring.",
	twitterImage: "https://365Surveys.co.uk/images/services/TrafficCounts.webp",
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
