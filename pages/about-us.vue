<template>
	<div class="overflow-hidden bg-black-3">
		<!-- Hero Section -->
		<section class="custom-wrapper h-screen pt-32">
			<div class="custom-container flex flex-col">
				<!-- Title -->
				<div id="page-title" class="flex items-center text-gray-4 space-x-1.5 mb-8">
					<icon class="text-2xl" name="tabler:info-octagon" />
					<h1 class="text-xl font-bold">About Us</h1>
				</div>

				<!-- Contents Wrapper -->
				<div class="flex-grow flex items-center justify-center">
					<div
						class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0 mb-[15%]"
					>
						<!-- Logo -->
						<img id="hero-logo" src="/assets/images/Logo.svg" alt="Logo" class="h-[15rem]" />

						<!-- Content -->
						<div class="flex flex-col justify-between md:w-3/4 md:ml-8 h-[15rem]">
							<p id="hero-text" class="text-xl text-gray-4">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
								dolore magna aliqua.
							</p>

							<!-- Counters -->
							<div id="hero-counters" class="flex flex-wrap gap-4 mt-8 md:mt-12 pb-12 md:pb-0">
								<WidgetCounter number="10" title="Years Experiences" />
								<WidgetCounter number="22" title="Happy Customers" />
								<WidgetCounter number="06" title="Upcoming Projects" />
							</div>
						</div>
					</div>
					<!-- Scroll -->
					<WidgetScroll id="hero-scroll" class="absolute hidden md:block bottom-12" />
				</div>
			</div>
		</section>

		<!-- Content Section -->
		<section id="what-section" class="custom-wrapper py-[20rem] md:py-[10.25rem]">
			<div class="custom-container">
				<!-- Content -->
				<div class="flex flex-col space-y-[15rem]">
					<!-- What is 365? -->
					<div class="flex flex-col md:flex-row space-y-8 md:space-y-0 justify-between items-center">
						<!-- Left Side -->
						<div class="space-y-8 md:w-1/2">
							<h1 class="title text-gray-5 text-4xl font-bold">What is 365?!</h1>
							<p class="text-gray-5 text-xl">
								A multi-disciplinary team of designers, engineers and consultants specialising in technical support and
								development for projects in the highways, transport and construction industries. Based in the South West
								of England but covering Nationwide and Europe we are available to support your projects.
							</p>
						</div>
						<!-- Right Side -->
						<div>
							<img class="w-full" src="/assets/images/whatUs365.svg" alt="" />
						</div>
					</div>

					<!-- Quality Assurance -->
					<div
						id="quality-section"
						class="flex flex-col md:flex-row space-y-8 md:space-y-0 justify-between items-center"
					>
						<!-- Left Side -->
						<div class="hidden md:block">
							<img class="w-full" src="/assets/images/QualityAssurance.svg" alt="" />
						</div>
						<!-- Right Side -->
						<div class="md:w-1/2 space-y-8">
							<h1 class="text-white text-4xl font-bold">Quality Assurance</h1>
							<p class="text-gray-5 text-xl">
								A multi-disciplinary team of designers, engineers and consultants specialising in technical support and
								development for projects in the highways, transport and construction industries. Based in the South West
								of England but covering Nationwide and Europe we are available to support your projects.
							</p>
						</div>

						<div class="space-y-8 md:hidden">
							<img class="w-full" src="/assets/images/QualityAssurance.svg" alt="" />
						</div>
					</div>

					<!-- Data security -->
					<div id="data-section" class="flex flex-col md:flex-row space-y-8 md:space-y-0 justify-between items-center">
						<!-- Left Side -->
						<div class="space-y-8 md:w-1/2">
							<h1 class="text-white text-4xl font-bold">Data security</h1>
							<p class="text-gray-5 text-xl">
								A multi-disciplinary team of designers, engineers and consultants specialising in technical support and
								development for projects in the highways, transport and construction industries. Based in the South West
								of England but covering Nationwide and Europe we are available to support your projects.
							</p>
						</div>
						<!-- Right Side -->
						<div>
							<img class="w-full" src="/assets/images/DataSecurity.svg" alt="" />
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp();

onMounted(() => {
	//* Hero Section Animations
	$gsap.fromTo("#page-title", { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 1.5, ease: "power3.out" });

	$gsap.fromTo("#hero-logo", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" });

	$gsap.fromTo(
		"#hero-text",
		{ opacity: 0, x: -50 },
		{ delay: 0.25, opacity: 1, x: 0, duration: 1.5, ease: "power3.out" }
	);

	$gsap.fromTo(
		"#hero-counters",
		{ opacity: 0, y: -150 },
		{ delay: 0.25, opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
	);

	$gsap.fromTo(
		"#hero-scroll",
		{ opacity: 0, y: -200 },
		{ delay: 0.5, opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
	);
	//* ==========================

	//* What Section Animations
	$gsap.from("#what-section", {
		scrollTrigger: {
			trigger: "#what-section",
			start: "top bottom",
			end: "center 60%",
			scrub: 1,
		},
		y: 150,
		opacity: 0,
		duration: 1,
		ease: "power3.out",
	});
	//* ==========================

	//* Quality Section Animations
	$gsap.from("#quality-section", {
		scrollTrigger: {
			trigger: "#quality-section",
			start: "top bottom",
			end: "center 60%",
			scrub: 1,
		},
		y: 150,
		opacity: 0,
		duration: 1,
		ease: "power3.out",
	});
	//* ==========================

	//* Data Section Animations
	$gsap.from("#data-section", {
		scrollTrigger: {
			trigger: "#data-section",
			start: "top bottom",
			end: "center 60%",
			scrub: 1,
		},
		y: 150,
		opacity: 0,
		duration: 1,
		ease: "power3.out",
	});
	//* ==========================
});
</script>

<style scoped></style>
