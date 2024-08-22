<template>
	<footer class="w-full custom-wrapper py-10 z-50 backdrop-blur-md bg-black-3 border-t border-gray-1 overflow-hidden">
		<!-- Container -->
		<div class="custom-container flex flex-col md:flex-row space-y-8 h-full items-center">
			<!-- Left (Logo) -->
			<div class="h-24 flex items-center">
				<NuxtLink to="/" class="nav-link" active-class="active-link">
					<img src="/assets/images/logo.svg" alt="Logo" class="h-24" />
				</NuxtLink>
			</div>

			<!-- Middle Section -->
			<div class="flex flex-1 h-20 items-center justify-center">
				<div class="flex flex-col items-center h-full justify-between">
					<WidgetSocialMedia class="" />
					<div class="mt-2 text-base text-gray-3 text-center">Copyright © 2024 365 SURVEYS. All rights reserved.</div>
				</div>
			</div>
		</div>
	</footer>
</template>
