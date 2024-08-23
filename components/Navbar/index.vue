<template>
	<nav
		:class="[
			'w-full custom-wrapper h-16 fixed z-50 backdrop-blur-md transition-all duration-300',
			isScrolled ? 'bg-black-1/50' : 'navbar-transparent',
		]"
	>
		<!-- Container -->
		<div class="custom-container flex items-center relative">
			<!-- Left side -->
			<div class="flex items-center text-gray-4">
				<!-- Menu -->
				<Icon name="ph:list-bold" class="text-3xl cursor-pointer hover:text-white" @click="openMenu" />

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

		<!-- Full-screen overlay menu -->
		<div ref="menuOverlay" class="fixed inset-0 bg-black z-50 -translate-x-full">
			<!-- Close Button -->
			<div class="absolute top-4 right-4 z-50">
				<Icon name="ph:x-bold" class="text-5xl text-gray-4 cursor-pointer hover:scale-x-105" @click="closeMenu" />
			</div>

			<!-- Menu Content -->
			<div class="custom-wrapper relative h-screen w-full bg-black-3">
				<!-- Items -->
				<div
					ref="navItems"
					class="custom-container flex flex-col gap-8 items-start justify-center text-gray-4 font-thin text-6xl overflow-y-auto"
				>
					<NuxtLink to="/" class="nav-link" active-class="nav-active-link" @click="closeMenu">Home</NuxtLink>
					<NuxtLink to="/about-us" class="nav-link" active-class="nav-active-link" @click="closeMenu"
						>About Us</NuxtLink
					>
					<NuxtLink to="/services" class="nav-link" active-class="nav-active-link" @click="closeMenu"
						>Services</NuxtLink
					>
					<NuxtLink to="/case-studies" class="nav-link" active-class="nav-active-link" @click="closeMenu"
						>Case Studies</NuxtLink
					>
					<NuxtLink to="/contact-us" class="nav-link" active-class="nav-active-link" @click="closeMenu"
						>Contact Us</NuxtLink
					>
				</div>
				<!-- Social Media -->
				<div ref="navSocial" class="absolute bottom-4 right-4 hidden md:block">
					<WidgetSocialMedia />
				</div>
			</div>
		</div>
	</nav>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp();

const isScrolled = ref(false);
const menuOverlay = ref(null);
const navItems = ref<HTMLElement | null>(null);
const navSocial = ref<HTMLElement | null>(null);

const openMenu = () => {
	menuOverlay.value.style.display = "block";

	$gsap.fromTo(menuOverlay.value, { x: "-100%" }, { x: "0%", duration: 1, ease: "power4.out" });

	if (navItems.value) {
		$gsap.from(navItems.value.children, {
			y: "-100",
			stagger: 0.2,
			duration: 0.75,
			delay: 0.5,
			opacity: 0,
			ease: "power4.out",
		});
	}

	if (navSocial.value) {
		$gsap.from(navSocial.value, {
			y: "200",
			stagger: 0.2,
			duration: 1,
			delay: 1,
			opacity: 0,
			ease: "power4.out",
		});
	}
};

const closeMenu = () => {
	$gsap.to(menuOverlay.value, {
		x: "-100%",
		duration: 1,
		ease: "power4.in",
		onComplete: () => {
			menuOverlay.value.style.display = "none";
		},
	});
};

const handleScroll = () => {
	isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
	window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
	window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.active-link button {
	border-color: var(--primary);
	color: var(--white);
}

.nav-link:hover {
	transition: transform 0.5s ease;
	transform: translateX(1rem) !important;
}

.nav-active-link {
	color: var(--primary);
}
</style>
