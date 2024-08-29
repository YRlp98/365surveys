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
									width="100%"
									height="100%"
									frameborder="0"
									style="border: 0"
									referrerpolicy="no-referrer-when-downgrade"
									src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBcHlW15bEfF8oxmEQIzHuYRS_r8G-dGkE&q=Office+Suite+2,+Brickfield+Offices,+Wincanton+BA9+8EG,+United+Kingdom"
									allowfullscreen
								>
								</iframe>
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
</script>

<style scoped></style>
