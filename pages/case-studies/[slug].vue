<template>
	<div class="overflow-hidden bg-black-3">
		<section class="custom-wrapper case-study-hero h-screen pt-32" :style="{ '--case-study-image': `url('${study.image}')` }">
			<div class="custom-container flex flex-col">
				<div id="page-path" class="flex flex-col items-start space-y-2 text-blue-400 mb-8 md:flex-row md:items-center md:space-y-0 md:space-x-2">
					<div class="flex items-center space-x-1.5">
						<Icon class="text-2xl" name="hugeicons:study-lamp" />
						<NuxtLink class="text-xl font-bold whitespace-nowrap" to="/case-studies">Case Studies</NuxtLink>
					</div>
					<span id="page-title" class="text-gray-5 text-sm font-thin">/ {{ study.title }}</span>
				</div>

				<div class="flex items-center justify-center h-full mb-[15%]">
					<h1 id="hero-title" class="text-gray-5 text-5xl font-bold">{{ study.title }}</h1>
					<WidgetScroll id="scroll" class="absolute bottom-12 cursor-pointer" @click="scrollToSection('content-section')" />
				</div>
			</div>
		</section>

		<section class="custom-wrapper pt-24 pb-[320px]">
			<div id="content-section" class="custom-container flex flex-col">
				<div class="flex flex-col text-white text-base">
					<div class="flex flex-col items-start justify-between gap-8 md:flex-row">
						<div class="flex flex-col justify-between gap-8 p-2 text-gray-5 md:w-1/2">
							<div class="space-y-2">
								<h2 class="text-2xl font-bold">Project</h2>
								<p class="text-xl">{{ study.title }}</p>
							</div>
							<div class="space-y-2">
								<h2 class="text-2xl font-bold">Client</h2>
								<p class="text-xl">{{ study.client }}</p>
							</div>
							<div class="space-y-2">
								<h2 class="text-2xl font-bold">Summary</h2>
								<p class="text-xl">{{ study.summary }}</p>
							</div>
						</div>
						<div class="md:w-1/2">
							<NuxtImg class="rounded-xl w-full" :src="study.image" :alt="study.imageAlt" format="webp" quality="82" sizes="sm:100vw md:50vw" />
						</div>
					</div>

					<div class="mt-20 space-y-8">
						<p v-for="paragraph in study.intro" :key="paragraph">{{ paragraph }}</p>
					</div>

					<div v-if="study.supportingImage" class="mt-16 flex flex-col items-start gap-8 md:flex-row">
						<NuxtImg
							class="w-full rounded-xl object-cover md:w-1/2"
							:src="study.supportingImage"
							:alt="study.supportingImageAlt"
							format="webp"
							quality="82"
							sizes="sm:100vw md:50vw"
						/>
						<div class="flex flex-col gap-8 md:flex-1">
							<p v-for="paragraph in study.supportingText" :key="paragraph">{{ paragraph }}</p>
						</div>
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
import studies from "~/data/case-studies.json";

const route = useRoute();
const requestedSlug = String(route.params.slug).toLowerCase();
const slugAliases: Record<string, string> = {
	"a360-traffic-management-part-of-stonehenge-amesbury-to-berwick-down": "a360-traffic-management-stonehenge",
};
const canonicalSlug = slugAliases[requestedSlug] ?? requestedSlug;

if (route.path !== `/case-studies/${canonicalSlug}`) {
	await navigateTo(`/case-studies/${canonicalSlug}`, { redirectCode: 301 });
}

const study = studies[canonicalSlug as keyof typeof studies];

if (!study) {
	throw createError({ statusCode: 404, statusMessage: "Case study not found" });
}

useSeoMeta({
	title: `${study.title} | 365 Surveys`,
	description: study.summary,
	ogTitle: `${study.title} | 365 Surveys`,
	ogDescription: study.summary,
	ogImage: `https://365Surveys.co.uk${study.image}`,
	ogUrl: `https://365Surveys.co.uk/case-studies/${canonicalSlug}`,
	twitterTitle: `${study.title} | 365 Surveys`,
	twitterDescription: study.summary,
	twitterImage: `https://365Surveys.co.uk${study.image}`,
	twitterCard: "summary_large_image",
});

const { $gsap } = useNuxtApp();

function scrollToSection(sectionId: string) {
	const section = document.getElementById(sectionId);
	if (!section) return;

	const offset = window.scrollY + section.getBoundingClientRect().top - window.innerHeight * 0.35;
	window.scrollTo({ top: offset, behavior: "smooth" });
}

onMounted(() => {
	$gsap.fromTo("#page-path", { opacity: 0, x: -100 }, { delay: 0.5, opacity: 1, x: 0, duration: 1.5, ease: "power3.out" });
	$gsap.fromTo("#page-title", { opacity: 0, y: 5 }, { delay: 1.5, opacity: 1, y: 0, duration: 0.5, ease: "power3.out" });
	$gsap.fromTo("#hero-title", { opacity: 0, y: 100 }, { delay: 0.5, opacity: 1, y: 0, duration: 1, ease: "power3.out" });
	$gsap.from("#content-section", {
		scrollTrigger: { trigger: "#content-section", start: "top bottom", scrub: 1 },
		y: 50,
		opacity: 0,
		duration: 1,
		ease: "power3.out",
	});
	$gsap.from("#back-button", {
		scrollTrigger: { trigger: "#back-button", start: "top bottom", end: "center 70%", scrub: 1 },
		x: 50,
		opacity: 0,
		duration: 1,
		ease: "power3.out",
	});
});
</script>

<style scoped>
.case-study-hero {
	background-image: linear-gradient(to bottom, rgba(30, 32, 35, 1), rgba(15, 16, 18, 0.5) 50%, rgba(30, 32, 35, 1)),
		var(--case-study-image);
	background-size: cover;
	background-position: center;
	position: relative;
}
</style>
