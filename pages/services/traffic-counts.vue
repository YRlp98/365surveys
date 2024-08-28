<template>
	<div class="overflow-hidden bg-black-3">
		<!-- Hero Section -->
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
							<img class="rounded-xl" src="/assets/images/turningCounts.jpg" alt="Traffic Counts" />
						</div>
						<!-- Right Side -->
						<div class="md:w-1/2">
							<p class="text-3xl font-bold">Video analysis of junctions to measure performance and identify patterns</p>
						</div>
					</div>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
						ea commodo consequat.
					</p>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
						ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
						nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum.
					</p>
				</div>

				<ButtonBackLeftArrow
					id="back-button"
					class="text-gray-5 justify-end mt-[10.25rem]"
					text="Back to Services page"
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
		url("/assets/images/turningCounts.jpg");
	background-size: cover;
	background-position: center;
	position: relative;
}
</style>
