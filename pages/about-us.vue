<template>
	<div class="overflow-x-hidden bg-black-3">
		<!-- Hero Section -->
		<section class="custom-wrapper h-screen pt-32">
			<div class="custom-container flex flex-col h-full">
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
	</div>
</template>

<style scoped></style>
