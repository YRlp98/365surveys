<template>
	<div class="overflow-hidden bg-black-3">
		<section
			class="custom-wrapper service-hero h-screen pt-32"
			:style="{ '--service-image': `url('${service.image}')` }"
		>
			<div class="custom-container flex flex-col">
				<div class="flex items-center text-gray-4 space-x-1.5 mb-8">
					<Icon class="text-2xl" name="material-symbols:home-repair-service-outline-sharp" />
					<NuxtLink class="text-xl font-bold" to="/services">Services</NuxtLink>
					<span class="text-gray-5 text-sm font-thin mt-1">/ {{ service.title }}</span>
				</div>

				<div class="flex items-center justify-center h-full mb-[15%]">
					<h1 class="text-gray-5 text-5xl font-bold text-center">{{ service.title }}</h1>
					<WidgetScroll class="absolute bottom-12" />
				</div>
			</div>
		</section>

		<section class="custom-wrapper pt-24 pb-[320px]">
			<div class="custom-container flex flex-col">
				<div class="flex flex-col text-white text-base space-y-8">
					<div class="flex flex-col md:flex-row gap-8 justify-between items-start">
						<div class="md:w-1/2">
							<NuxtImg
								class="rounded-xl w-full"
								:src="service.image"
								:alt="service.imageAlt"
								format="webp"
								quality="82"
								sizes="sm:100vw md:50vw"
							/>
						</div>
						<div class="md:w-1/2">
							<p class="text-3xl font-bold">{{ service.summary }}</p>
							<p class="mt-8 text-gray-4">{{ service.description }}</p>
						</div>
					</div>

					<section aria-labelledby="survey-approach-title" class="space-y-5">
						<h2 id="survey-approach-title" class="text-2xl font-bold text-white">
							{{ service.detailHeading }}
						</h2>
						<p v-for="paragraph in service.details" :key="paragraph" class="text-gray-4">
							{{ paragraph }}
						</p>
					</section>

					<section aria-labelledby="survey-benefits-title">
						<h2 id="survey-benefits-title" class="mb-5 text-2xl font-bold text-white">
							What this survey can help you understand
						</h2>
						<ul class="list-disc space-y-5 pl-6 marker:text-blue-400">
							<li
								v-for="benefit in service.benefits"
								:key="benefit.title"
								class="pl-2"
							>
								<p class="font-bold text-white">{{ benefit.title }}</p>
								<p class="mt-1 text-gray-4">{{ benefit.text }}</p>
							</li>
						</ul>
					</section>

					<p class="text-gray-4">{{ service.closing }}</p>
				</div>

				<div class="mt-20 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
					<NuxtLink class="font-semibold text-blue-400 hover:text-white transition-colors" to="/contact-us">
						Discuss a survey <span aria-hidden="true">→</span>
					</NuxtLink>
					<ButtonBackLeftArrow
						class="text-gray-5 justify-end"
						text="CHECK OTHER SERVICES"
						link="/services"
					/>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import services from "~/data/services.json";

const route = useRoute();
const service = services[route.params.slug as keyof typeof services];

if (!service) {
	throw createError({ statusCode: 404, statusMessage: "Service not found" });
}

useSeoMeta({
	title: `${service.title} | 365 Surveys`,
	description: service.summary,
	ogTitle: `${service.title} | 365 Surveys`,
	ogDescription: service.summary,
	ogImage: `https://365Surveys.co.uk${service.image}`,
	ogUrl: `https://365Surveys.co.uk/services/${route.params.slug}`,
	twitterTitle: `${service.title} | 365 Surveys`,
	twitterDescription: service.summary,
	twitterImage: `https://365Surveys.co.uk${service.image}`,
	twitterCard: "summary_large_image",
});
</script>

<style scoped>
.service-hero {
	background-image: linear-gradient(to bottom, rgba(30, 32, 35, 1), rgba(15, 16, 18, 0.5) 50%, rgba(30, 32, 35, 1)),
		var(--service-image);
	background-size: cover;
	background-position: center;
	position: relative;
}
</style>
