<template>
	<div class="overflow-x-hidden bg-black-3">
		<!-- Hero Section -->
		<section class="custom-wrapper h-screen pt-32">
			<div class="custom-container flex flex-col">
				<!-- Title -->
				<div class="flex items-center text-gray-4 space-x-1.5 mb-8">
					<icon class="text-2xl" name="tabler:info-octagon" />
					<h1 class="text-xl font-bold">About Us</h1>
				</div>

				<!-- Contents Wrapper -->
				<div class="flex-grow flex items-center justify-center">
					<div
						class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0 mb-[15%]"
					>
						<!-- Logo -->
						<img src="/assets/images/Logo.svg" alt="Logo" class="h-[15rem]" id="logo" />

						<!-- Content -->
						<div class="flex flex-col justify-between md:w-3/4 md:ml-8 h-[15rem]">
							<p class="text-xl text-gray-4">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
								dolore magna aliqua.
							</p>

							<!-- Counters -->
							<div class="flex flex-wrap gap-4 mt-8 md:mt-12 pb-12 md:pb-0">
								<WidgetCounter number="10" title="Years Experiences" />
								<WidgetCounter number="22" title="Happy Customers" />
								<WidgetCounter number="06" title="Upcoming Projects" />
							</div>
						</div>
					</div>
				</div>
				<!-- Scroll -->
				<WidgetScroll id="scroll" class="absolute hidden md:block bottom-12" />
			</div>
		</section>

		<!-- Content Section -->
		<section class="custom-wrapper py-[10.25rem]">
			<div class="custom-container">
				<!-- Content -->
				<div class="flex flex-col space-y-[15rem]">
					<!-- What is 365? -->
					<div class="flex flex-col md:flex-row space-y-8 md:space-y-0 justify-between items-center">
						<!-- Left Side -->
						<div class="space-y-8 md:w-1/2">
							<h1 class="text-white text-4xl font-bold">What is 365?!</h1>
							<p class="text-gray-5 text-xl">
								A multi-disciplinary team of designers, engineers and consultants specialising in technical support and
								development for projects in the highways, transport and construction industries. Based in the South West
								of England but covering Nationwide and Europe we are available to support your projects.
							</p>
						</div>
						<!-- Right Side -->
						<div>
							<img id="image" class="w-full" src="/assets/images/whatUs365.svg" alt="" />
						</div>
					</div>

					<!-- Quality Assurance -->
					<div class="flex flex-col md:flex-row space-y-8 md:space-y-0 justify-between items-center">
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
					<div class="flex flex-col md:flex-row space-y-8 md:space-y-0 justify-between items-center">
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
</script>

<style scoped></style>
