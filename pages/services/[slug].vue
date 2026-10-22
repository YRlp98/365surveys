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
const services = {
	"driver-behaviour": {
		title: "Driver Behaviour",
		image: "/images/services/driverBehaviour.webp",
		imageAlt: "Road traffic observed during a driver behaviour survey",
		summary: "Build a clearer picture of how people use and interact with the road network.",
		description:
			"Driver behaviour surveys observe road user actions at selected locations. They can help reveal how drivers respond to layouts, signs and other road users, giving project teams evidence to investigate safety and operational questions.",
		detailHeading: "A closer look at road user behaviour",
		details: [
			"Each study starts with a clear observation plan. We agree the site, survey periods and behaviours of interest with you, then collect evidence at the locations where those interactions can be seen. A focused brief helps keep the survey relevant to the issue you are investigating.",
			"The findings can be grouped by movement, location or time period to make patterns easier to review. This gives project teams a practical record of what was observed and helps identify where additional analysis, design review or monitoring may be useful.",
		],
		benefits: [
			{ title: "Observe real movement", text: "Capture turning, lane choice, yielding and other agreed behaviours at the locations that matter to your study." },
			{ title: "Understand interactions", text: "Review how vehicles, pedestrians and cyclists move around one another and through a site." },
			{ title: "Compare conditions", text: "Collect evidence across selected times or locations to understand how observed behaviour changes." },
			{ title: "Support practical decisions", text: "Use clear survey findings to inform design reviews, monitoring and the next stage of transport planning." },
		],
		closing: "We can shape the survey around your site, research question and reporting needs, then agree the locations, time periods and outputs before collection begins.",
	},
	"journey-times": {
		title: "Journey Times",
		image: "/images/services/journeyTime.webp",
		imageAlt: "Road corridor used for journey time monitoring",
		summary: "Measure how long journeys take and how consistently people can make them.",
		description:
			"Journey time surveys track travel across a route or network over agreed periods. The results show how journey duration varies by direction, time of day or survey day, helping teams understand reliability as well as typical travel times.",
		detailHeading: "From route selection to useful comparisons",
		details: [
			"We work with you to define the route, start and end points, any intermediate sections and the periods to be surveyed. Consistent route definitions make it easier to compare sections and understand where changes in travel time occur along a journey.",
			"Results can be summarised by direction and survey period, with comparisons that show both typical journey duration and variation. This provides a clear evidence base for corridor reviews, scheme monitoring and wider studies of how people move through a network.",
		],
		benefits: [
			{ title: "Compare routes", text: "See how alternative routes perform and where delays appear along a corridor." },
			{ title: "Measure variation", text: "Understand differences between peak and off-peak periods or between survey days." },
			{ title: "Identify delay patterns", text: "Use time-based results to focus attention on locations and periods that need further investigation." },
			{ title: "Track change", text: "Repeat surveys can help assess how journey times respond to network or operational changes." },
		],
		closing: "Survey routes, timings and reporting can be tailored to your study so the findings are relevant to the decisions you need to make.",
	},
	"traffic-speed": {
		title: "Traffic Speed",
		image: "/images/services/trafficSpeed.webp",
		imageAlt: "Vehicles travelling along a road during a traffic speed survey",
		summary: "Understand vehicle speeds across locations and time periods.",
		description:
			"Traffic speed surveys provide a picture of how vehicles travel on a road. Depending on the site and brief, collection can use automated or manual methods, including radar and laser equipment, to support monitoring and transport assessments.",
		detailHeading: "Speed data shaped around your location",
		details: [
			"The survey plan sets out where speeds will be measured, in which directions and during which periods. We select a collection approach to suit the road and the information needed, then organise the results so the conditions at each survey location are clear.",
			"Speed findings are most useful when read in context. They can be reviewed alongside traffic volumes, road layout and other site observations to help teams understand local conditions, compare locations or monitor changes over time.",
		],
		benefits: [
			{ title: "Build a speed profile", text: "Review recorded speeds at selected points and compare results by direction or time period." },
			{ title: "See when patterns change", text: "Understand how observed speeds differ across the day or between survey periods." },
			{ title: "Inform local assessments", text: "Combine speed evidence with other site information to support road safety and design reviews." },
			{ title: "Monitor over time", text: "Use repeatable survey setups to compare conditions before and after a change." },
		],
		closing: "We will agree the collection approach and reporting format with you in advance, based on the road, survey question and intended use of the data.",
	},
	"drone-surveys": {
		title: "Drone Surveys",
		image: "/images/services/droneSurveys.webp",
		imageAlt: "Aerial view of a site for a drone survey",
		summary: "Get a wider view of transport activity and site conditions from above.",
		description:
			"Drone surveys can provide aerial video and imagery for locations where a broader view helps explain how a transport site operates. Depending on the project, outputs may include movement analysis, photogrammetry or LiDAR data, subject to site requirements and permissions.",
		detailHeading: "A planned aerial view of your site",
		details: [
			"We plan the survey around the area to be observed and the questions the imagery needs to answer. The site, timing and capture approach are agreed in advance so the resulting view is useful for the project and suited to the location.",
			"Aerial footage can help show how activity develops across a wider area than a single roadside viewpoint. Where the brief calls for it, imagery can also support mapping or other spatial outputs, with the deliverables agreed to match the project scope.",
		],
		benefits: [
			{ title: "See the whole site", text: "Capture activity across a junction, corridor or wider area from a consistent viewpoint." },
			{ title: "Review movement", text: "Use recorded footage to examine flows, queues and interactions across the survey area." },
			{ title: "Create visual records", text: "Produce imagery or mapping outputs suited to the scope and technical needs of the project." },
			{ title: "Plan around the location", text: "Set the survey method and flight plan around site constraints, permissions and the information required." },
		],
		closing: "Every drone project is planned around its location and purpose, with the appropriate permissions and operating requirements considered before fieldwork.",
	},
	"turning-counts": {
		title: "Turning Counts",
		image: "/images/services/turningCounts.webp",
		imageAlt: "Vehicles moving through a junction during a turning count survey",
		summary: "See which movements people make through a junction and when they make them.",
		description:
			"Turning counts record traffic movements at an intersection, typically broken down by approach and direction. Video analysis can provide a consistent way to review junction activity and understand how demand is distributed across its movements.",
		detailHeading: "A clear picture of junction movements",
		details: [
			"Before collection, the junction is mapped into approaches and movements so the count reflects the layout on the ground. Survey periods and time intervals are set around the needs of your study, allowing demand to be compared across the parts of the day that matter.",
			"The resulting movement tables help show how traffic is distributed through the junction and where demand is concentrated. These counts can provide an input to junction assessments, design work and monitoring when considered alongside other relevant site data.",
		],
		benefits: [
			{ title: "Break down movements", text: "Understand the volume and mix of traffic making each agreed turn or crossing movement." },
			{ title: "Find busy periods", text: "Compare movements by time interval to see when demand is highest." },
			{ title: "Support junction studies", text: "Use movement data as an input to capacity, design and transport planning work." },
			{ title: "Review recorded evidence", text: "Video-based collection can support quality checks and closer examination of observed patterns." },
		],
		closing: "We can tailor the junction layout, vehicle classifications, survey intervals and delivery format to the requirements of your project.",
	},
	parking: {
		title: "Parking Surveys",
		image: "/images/services/parking.webp",
		imageAlt: "Parking spaces observed during a parking survey",
		summary: "Understand how parking is used across a site or area.",
		description:
			"Parking surveys help establish how spaces are occupied and how demand changes over time. Surveys can cover on-street or off-street locations and be designed around the questions being asked, from a snapshot of occupancy to a fuller picture of use.",
		detailHeading: "Surveying parking use over time",
		details: [
			"A parking study begins by agreeing the area, the spaces or zones to include and the times when observations will take place. The method can be adapted to the site layout and survey objective, whether you need a snapshot or repeated observations throughout a period.",
			"Organised results make it easier to compare use between locations and times. Depending on the agreed method, findings can help describe occupancy and changes in use, providing evidence for parking reviews, development assessments and local planning work.",
		],
		benefits: [
			{ title: "Measure occupancy", text: "See how many spaces are in use at agreed times and locations." },
			{ title: "Understand turnover", text: "Where the survey brief allows, examine how parking use changes as vehicles arrive and leave." },
			{ title: "Compare areas", text: "Review differences between streets, car parks, zones or survey periods." },
			{ title: "Inform parking plans", text: "Use observed demand to support reviews of parking provision, management or development proposals." },
		],
		closing: "The survey design can reflect local restrictions, layout and operating hours, with clear definitions agreed for the data you need.",
	},
	"public-transport": {
		title: "Public Transport Surveys",
		image: "/images/services/publicTransport.webp",
		imageAlt: "Public transport service travelling through an urban area",
		summary: "Learn how passengers use public transport routes and stops.",
		description:
			"Public transport surveys collect evidence about passenger activity and service use. Depending on the brief, this may include passenger counts, boarding and alighting observations, or use of selected routes and stops to help understand how a network serves its users.",
		detailHeading: "Evidence from routes, stops and passengers",
		details: [
			"We agree the routes, stops, services and survey periods that best match your study. The collection plan can focus on passenger volumes, activity at selected stops or how use varies across a route, with definitions confirmed before the survey begins.",
			"Clear summaries help compare observed activity by location, service or time. This evidence can support reviews of public transport provision and access, and can be considered alongside service information and other transport data when planning network changes.",
		],
		benefits: [
			{ title: "Understand passenger activity", text: "Build a picture of passenger volumes at selected stops, routes or times." },
			{ title: "Review service use", text: "Compare observed activity across locations, directions or survey periods." },
			{ title: "Support network planning", text: "Use survey findings to inform reviews of service provision and transport access." },
			{ title: "Focus on your question", text: "Choose collection points and outputs that match the scope of your study." },
		],
		closing: "We will work with you to define the services, locations, times and passenger measures required for a useful and well-scoped survey.",
	},
} as const;

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
