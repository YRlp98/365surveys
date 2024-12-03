<template>
	<div class="min-h-screen flex flex-col bg-black-3">
		<!-- Hero Section -->
		<section class="custom-wrapper flex-1 pt-32 pb-72">
			<div class="custom-container flex flex-col">
				<!-- Title -->
				<div id="page-title" class="flex items-center text-gray-4 space-x-1.5 mb-8">
					<icon class="text-2xl" name="hugeicons:telephone" />
					<h1 class="text-xl font-bold">Contact Us</h1>
				</div>

				<!-- Content Wrapper -->
				<div id="content" class="pt-20 flex-1 text-white">
					<h1 class="title text-gray-5 text-4xl font-bold">HAVE A QUESTION?</h1>
					<p class="mt-8 text-xl">We’re here to help! Reach out to us and we'll get back to you as soon as possible.</p>

					<div class="mt-16 flex flex-col md:flex-row space-y-8 md:space-y-0 justify-between items-center">
						<!-- Left Side -->
						<div id="left-side" class="space-y-8 md:w-1/2 flex flex-col justify-between">
							<!-- Contact info -->
							<div class="flex flex-col space-y-2">
								<span><b>Email:</b> Ops@365surveys.co.uk</span>
								<span><b>Phone:</b> 01963 361123</span>
								<span><b>Address:</b> Office Suite 2, Brickfield Offices, Wincanton BA9 8EG, United Kingdom</span>
							</div>

							<!-- Map -->
							<div class="w-full h-[20rem] rounded-xl border-8 border-gray-1 overflow-hidden">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3364.509436740103!2d-2.4650676999999996!3d51.0404783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487239001de6e55f%3A0x8587ff6fb62bb5b1!2s365%20Surveys%20Ltd!5e1!3m2!1sen!2sde!4v1733216748861!5m2!1sen!2sde"
									width="100%"
									height="100%"
									style="border: 0"
									allowfullscreen=""
									loading="lazy"
									referrerpolicy="no-referrer-when-downgrade"
								></iframe>
							</div>
						</div>
						<!-- Right Side -->
						<div id="right-side">
							<FormContactUs />
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
	$gsap.fromTo(
		"#page-title",
		{ opacity: 0, x: -100 },
		{ delay: 0.5, opacity: 1, x: 0, duration: 1.5, ease: "power3.out" }
	);

	$gsap.fromTo("#content", { opacity: 0, y: 100 }, { delay: 0.5, opacity: 1, y: 0, duration: 1.5, ease: "power3.out" });

	$gsap.fromTo(
		"#right-side",
		{ opacity: 0, x: -100 },
		{ delay: 1, opacity: 1, x: 0, duration: 1.5, ease: "power3.out" }
	);
});

useSeoMeta({
	description:
		"Contact 365 Surveys for all inquiries related to our transportation data solutions. Reach us via phone, email, or our contact form and we’ll get back to you soon.",
	ogTitle: "Contact 365 Surveys | Reach Out for Transportation Data Solutions",
	ogDescription:
		"Have questions or need assistance? Contact 365 Surveys by phone, email, or our contact form. We're here to help with all your transportation data needs.",
	ogImage: "https://365Surveys.co.uk/logo.png",
	ogUrl: "https://365Surveys.co.uk/contact-us",
	twitterTitle: "Contact 365 Surveys - We're Here to Help",
	twitterDescription:
		"Need support or have questions? Contact 365 Surveys for all inquiries related to transportation data solutions.",
	twitterImage: "https://365Surveys.co.uk/logo.png",
	twitterCard: "https://365Surveys.co.uk/logo.png",
});

useHead({
	title: "365 Surveys - Contact Us",
	meta: [
		{
			name: "description",
			content:
				"Get in touch with 365 Surveys. Reach us via phone, email, or our contact form for any inquiries related to transportation data solutions.",
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
