<template>
	<div class="overflow-hidden">
		<!-- Hero Section -->
		<section class="custom-wrapper hero-background h-screen pt-16">
			<div class="custom-container flex flex-col items-center justify-center">
				<!-- Logo -->
				<!-- <img src="/assets/images/Logo.svg" alt="Logo" class="h-[31rem] px-8 md:px-0-" id="logo" /> -->
				<WidgetTextTyping id="textTyping"/>

				<!-- Scroll -->
				<WidgetScroll id="scroll" class="absolute bottom-12" />
			</div>
		</section>

		<!-- Section 1: About -->
		<section class="custom-wrapper py-[11.125rem] bg-black-3">
			<div id="about-section" class="custom-container">
				<h2 class="text-xl font-light tracking-widest text-gray-5">About</h2>
				<h1 class="mt-6 stroked-text text-6xl font-bold uppercase">365<br />surveys</h1>
				<div class="mt-6 flex flex-wrap gap-12 justify-center md:justify-between items-center">
					<p class="text-gray-4 text-2xl font-normal w-full md:w-2/3">
						365 surveys is a Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
						ut labore et dolore magna aliqua.
					</p>

					<ButtonMoreRightArrow id="about-button" class="text-gray-4" text="Learn more about us" link="/about-us" />
				</div>
			</div>
		</section>

		<!-- Section 2: Services -->
		<section class="custom-wrapper py-[11.125rem] bg-black-1">
			<div id="services-section" class="custom-container">
				<div class="flex flex-col space-y-40 md:flex-row md:space-y-0 items-center h-full">
					<!-- Left side -->
					<div class="flex flex-col justify-between w-full md:w-1/2 h-[20rem]">
						<h2 class="text-xl font-light tracking-widest leading-10 text-gray-5">
							Our Services,<br />
							Your Solutions
						</h2>

						<p class="text-gray-4 text-2xl font-normal">
							Explore our journey through real-world projects that highlight our expertise and dedication. Each case
							study showcases how we've tackled unique challenges.
						</p>
					</div>

					<!-- Right side -->
					<div id="services-slide" class="w-full md:w-1/2">
						<SliderVerticalCard />
					</div>
				</div>

				<ButtonMoreRightArrow
					id="services-button"
					class="mt-16 justify-center md:justify-end text-gray-4"
					text="Explore Our Services"
					link="/services"
				/>
			</div>
		</section>

		<!-- Section 3: Case Studies -->
		<section class="custom-wrapper py-[11.125rem] bg-black-3">
			<div id="case-section" class="custom-container">
				<h2 class="text-xl font-light tracking-widest leading-10 text-gray-5">Case Studies</h2>

				<p class="text-gray-4 text-2xl font-normal mt-12">
					Explore our journey through real-world projects that highlight our expertise and dedication. Each case study
					showcases how we've tackled unique challenges, delivered tailored solutions, and driven success for our
					clients. From initial strategy to final implementation, discover the impact of our work and the stories behind
					the results.
				</p>

				<!-- Second Row -->
				<div class="flex flex-col md:flex-row items-center justify-between mt-16">
					<CardCaseStudies id="case-slide" class="md:w-2/3" />

					<ButtonMoreRightArrow
						id="case-button"
						class="mt-16 md:mt-0 justify-center md:justify-end text-gray-4"
						text="Browse All Case Studies"
						link="/case-studies"
					/>
				</div>
			</div>
		</section>

		<!-- Section 4: ContactUs -->
		<section class="custom-wrapper py-[11.125rem] bg-black-1">
			<div id="contact-section" class="custom-container">
				<h2 id="contact-title" class="text-xl font-light tracking-widest leading-10 text-gray-5">Get in Touch</h2>

				<p id="contact-title" class="text-gray-4 text-2xl font-normal mt-12">
					We’re here to help with any questions or inquiries you may have. Whether you want to collaborate, learn more
					about our services, or just say hello, we'd love to hear from you. Don’t hesitate to reach out!
				</p>

				<!-- Second Row -->
				<div id="contact-info" class="flex flex-col md:flex-row items-center justify-between mt-12 text-gray-4">
					<div class="flex flex-col space-y-2">
						<span><b>Email:</b> Ops@365surveys.co.uk</span>
						<span><b>Phone:</b> 01963 361123</span>
						<span><b>Address:</b> Office Suite 2, Brickfield Offices, Wincanton BA9 8EG, United Kingdom</span>
					</div>

					<ButtonMoreRightArrow
						id="contact-button"
						class="mt-16 md:mt-0 justify-center md:justify-end text-gray-4"
						text="Contact Us Form"
						link="/case-studies"
					/>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp();

onMounted(() => {
	//* Hero Section Animations
	// $gsap.fromTo("#logo", { opacity: 0, y: 200 }, { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" });

	$gsap.fromTo("#textTyping", { opacity: 0 }, { opacity: 1, duration: 1.5, ease: "power3.out" });

	$gsap.fromTo(
		"#scroll",
		{ opacity: 0, y: -200 },
		{ delay: 0.15, opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
	);
	//* ==========================

	//* About Us Section Animations
	$gsap.from("#about-section", {
		scrollTrigger: {
			trigger: "#about-section",
			start: "top bottom",
			scrub: 1,
		},
		y: 50,
		opacity: 0,
		duration: 1,
		ease: "power3.out",
	});

	$gsap.from("#about-button", {
		scrollTrigger: {
			trigger: "#about-button",
			start: "top 150%",
			scrub: 1,
		},
		x: -100,
		opacity: 0,
		duration: 1.4,
		ease: "power3.out",
		delay: 0.4,
	});
	//* ==========================

	//* Services Section Animations
	$gsap.from("#services-section", {
		scrollTrigger: {
			trigger: "#services-section",
			start: "top bottom",
			scrub: 1,
		},
		y: 50,
		opacity: 0,
		duration: 1,
		ease: "power3.out",
	});

	$gsap.from("#services-slide", {
		scrollTrigger: {
			trigger: "#services-slide",
			start: "top bottom",
			end: "center 80%",
			scrub: 1,
		},
		y: 150,
		opacity: 0,
		duration: 1,
		ease: "power3.out",
	});

	$gsap.from("#services-button", {
		scrollTrigger: {
			trigger: "#services-button",
			start: "top bottom",
			end: "center 80%",
			scrub: 1,
		},
		x: -100,
		opacity: 0,
		duration: 1.4,
		ease: "power3.out",
		delay: 0.4,
	});
	//* ==========================

	//* Case Section Animations
	$gsap.from("#case-section", {
		scrollTrigger: {
			trigger: "#case-section",
			start: "top bottom",
			scrub: 1,
		},
		y: 50,
		opacity: 0,
		duration: 1,
		ease: "power3.out",
	});

	$gsap.from("#case-slide", {
		scrollTrigger: {
			trigger: "#case-slide",
			start: "top bottom",
			end: "center 80%",
			scrub: 1,
		},
		y: 100,
		opacity: 0,
		duration: 1,
		ease: "power3.out",
	});

	$gsap.from("#case-button", {
		scrollTrigger: {
			trigger: "#case-button",
			start: "top bottom",
			end: "center 80%",
			scrub: 1,
		},
		x: -100,
		opacity: 0,
		duration: 1.4,
		ease: "power3.out",
		delay: 0.4,
	});
	//* ==========================

	//* Contact Us Section Animations
	$gsap.from("#contact-section", {
		scrollTrigger: {
			trigger: "#contact-section",
			start: "top bottom",
			end: "center 50%",
			scrub: 1,
		},
		y: 50,
		opacity: 0,
		duration: 1,
		ease: "power3.out",
	});

	$gsap.from("#contact-button", {
		scrollTrigger: {
			trigger: "#contact-button",
			start: "top bottom",
			end: "center 50%",
			scrub: 1,
		},
		x: -100,
		opacity: 0,
		duration: 1.4,
		ease: "power3.out",
		delay: 0.4,
	});
	//* ==========================
});
</script>

<style scoped>
.hero-background {
	background-image: linear-gradient(to bottom, rgba(30, 32, 35, 1), rgba(15, 16, 18, 0.5) 50%, rgba(30, 32, 35, 1)),
		url("/assets/images/doc_2024-08-30_08-23-32.gif");
	background-size: cover;
	background-position: center;
	position: relative;
}
</style>
