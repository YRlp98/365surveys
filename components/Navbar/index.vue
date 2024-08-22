<template>
	<nav class="w-full custom-wrapper fixed h-16 z-50 backdrop-blur-md bg-black-1/50">
		<!-- Container -->
		<div class="custom-container flex items-center relative">
			<!-- Left side -->
			<div class="flex items-center text-gray-4">
				<!-- Menu -->
				<Icon name="ph:list-bold" class="text-3xl cursor-pointer hover:text-white" />

				<!-- Links -->
				<div class="pl-12 space-x-7 hidden md:block">
					<NuxtLink to="/" class="nav-link" active-class="active-link">
						<button class="h-16 border-b-2 border-transparent">Home</button>
					</NuxtLink>
					<NuxtLink to="/about-us" class="nav-link" active-class="active-link">
						<button class="h-16 border-b-2 border-transparent">About Us</button>
					</NuxtLink>
				</div>
			</div>

			<!-- Middle (Logo) -->
			<div class="absolute left-1/2 transform -translate-x-1/2">
				<NuxtLink to="/" class="nav-link" active-class="active-link">
					<img src="/assets/images/logo.svg" alt="Logo" class="h-12" />
				</NuxtLink>
			</div>

			<!-- Right Side -->
			<div class="ml-auto text-white hidden md:block">
				<ButtonRoundedIconText text="Contact Us" icon="solar:call-chat-linear" link="/contact-us" />
			</div>
		</div>
	</nav>
</template>

<style scoped>
.active-link button {
	border-color: #4275f4;
	color: white;
}
</style>
