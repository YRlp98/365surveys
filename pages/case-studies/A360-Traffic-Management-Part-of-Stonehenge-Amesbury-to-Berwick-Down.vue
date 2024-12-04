<template>
	<div class="overflow-hidden bg-black-3">
		<!-- Hero Section -->
		<section class="custom-wrapper hero-background h-screen pt-32">
			<div class="custom-container flex flex-col">
				<!-- Path -->
				<div id="page-path" class="flex items-center text-blue-400 space-x-1.5 mb-8">
					<icon class="text-2xl" name="hugeicons:study-lamp" />
					<NuxtLink class="text-xl font-bold whitespace-nowrap" to="/case-studies">Case Studies</NuxtLink>
					<h3 id="page-title" class="text-gray-5 text-sm font-thin mt-1 truncate">/ {{ currentPage }}</h3>
				</div>

				<div class="flex items-center justify-center h-full mb-[15%]">
					<!-- Title -->
					<h1 id="hero-title" class="text-gray-5 text-5xl font-bold">{{ currentPage }}</h1>

					<!-- Scroll -->
					<WidgetScroll
						id="scroll"
						class="absolute bottom-12 cursor-pointer"
						@click="scrollToSection('content-section')"
					/>
				</div>
			</div>
		</section>

		<!-- Content Section -->
		<section class="custom-wrapper pt-24 pb-[320px]">
			<div id="content-section" class="custom-container flex flex-col">
				<!-- Content -->
				<div class="flex flex-col text-white text-base">
					<!-- Image and Description -->
					<div class="flex flex-col md:flex-row space-y-8 md:space-y-0 gap-8 justify-between items-start h-full">
						<!-- Left Side -->
						<div class="md:w-1/2 space-y-8 md:space-y-0 flex flex-col justify-between text-gray-5 p-2 h-full">
							<!-- Project -->
							<div class="space-y-2">
								<h3 class="text-2xl font-bold">Project:</h3>
								<p class="text-xl">{{ currentPage }}</p>
							</div>

							<!-- Client -->
							<div class="space-y-2">
								<h3 class="text-2xl font-bold">Client:</h3>
								<p class="text-xl">OCU Group and National Highways</p>
							</div>

							<!-- Summary -->
							<div class="space-y-2">
								<h3 class="text-2xl font-bold">Summary:</h3>
								<p class="text-xl">
									The A303 Stonehenge project remains as one of the most complex and sensitive projects investigated in
									the UK in recent history. Our experts supported the project construction team with highly detailed
									data and analysis to inform strategic decision making
								</p>
							</div>
						</div>
						<!-- Right Side -->
						<div class="md:w-1/2">
							<img class="rounded-xl" src="/assets/images/case-studies/case-study-2-p3.webp" :alt="currentPage" />
						</div>
					</div>

					<div class="mt-20 space-y-8">
						<p>
							During 2024, 365 Surveys Ltd supported National Highways/SSEN and OCU group through collection of detailed
							traffic data to assist in the development of a traffic management impact assessment, our highly skilled
							team worked in close collaboration with the construction team, National Highways and Wiltshire Council to
							ensure robust data was collected in urban and rural locations with the upmost care taken on a sensitive
							and emotive project.
						</p>

						<p>
							Data collection was conducted using ATCs (Automatic Traffic Counters) at key locations and was
							supplemented by radar where locations deemed a non-contact approach as more suitable. Our team were
							responsible for planning the most suitable locations, managing the permit process and deploying and
							removing survey equipment and reinstating the carriageway where required.
						</p>

						<!-- <img
							class="w-full rounded-xl cursor-pointer"
							src="/assets/images/case-studies/case-study-2-p1.webp"
							alt="currentPage"
						/> -->

						<div class="flex justify-between items-start gap-8 h-full">
							<!-- Left -->
							<div class="w-1/2">
								<img
									class="rounded-xl cursor-pointer"
									src="/assets/images/case-studies/case-study-2-p1.webp"
									alt="currentPage"
								/>
							</div>
							<!-- Right -->
							<div class="flex flex-col justify-between flex-1 h-full pb-10">
								<p class="flex-grow">
									Our team also utilised our connected vehicle data platform to harvest detailed journey time and
									vehicle speed data along key routes whilst the A360 was closed to facilitate crucial construction
									activities. This data allowed OCU and National Highways to form a strong picture of how the road
									closure was affecting traffic displacement and behaviours and to allow the team to proactively focus
									on deploying countermeasures to minimise the impact of road closures.
								</p>

								<p class="flex-grow">
									The A382 is the key road link between the A38 and the regional hub of Newton Abbott in Devon. Our team
									collected detailed traffic data to support the development of traffic simulations and impact
									assessments during the planning and assessment stages of the project
								</p>
							</div>
						</div>

						<!-- <p>
							Our team also utilised our connected vehicle data platform to harvest detailed journey time and vehicle
							speed data along key routes whilst the A360 was closed to facilitate crucial construction activities. This
							data allowed OCU and National Highways to form a strong picture of how the road closure was affecting
							traffic displacement and behaviours and to allow the team to proactively focus on deploying
							countermeasures to minimise the impact of road closures.
						</p> -->

						<!-- <p>
							The A382 is the key road link between the A38 and the regional hub of Newton Abbott in Devon. Our team
							collected detailed traffic data to support the development of traffic simulations and impact assessments
							during the planning and assessment stages of the project
						</p> -->
					</div>
				</div>

				<ButtonBackLeftArrow
					id="back-button"
					class="text-gray-5 justify-end mt-[10.25rem]"
					text="CHECK OTHER CASE STUDIES"
					link="/case-studies"
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
	const pageTitle = routeName.split("-").slice(2).join(" ");
	return pageTitle ? pageTitle.replace(/-/g, " ") : "Page";
});

function scrollToSection(sectionId: string) {
	const section = document.getElementById(sectionId);
	if (section) {
		const sectionTop = section.getBoundingClientRect().top;

		const offset = window.scrollY + sectionTop - window.innerHeight * 0.35; // 65%

		window.scrollTo({
			top: offset,
			behavior: "smooth",
		});
	}
}

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
		url("/assets/images/case-studies/case-study-2-p3.webp");
	background-size: cover;
	background-position: center;
	position: relative;
}
</style>
