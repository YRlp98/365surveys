<template>
	<div class="overflow-hidden bg-black-3">
		<!-- Hero Section -->
		<section class="custom-wrapper pt-32 pb-72">
			<div class="custom-container flex flex-col">
				<!-- Title -->
				<div id="page-title" class="flex items-center text-gray-4 space-x-1.5 mb-8">
					<icon class="text-2xl" name="material-symbols:home-repair-service-outline-sharp" />
					<h1 class="text-xl font-bold">Services</h1>
				</div>

				<!-- Contents Wrapper -->
				<div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-20">
					<CardService
						class="h-[25rem]"
						title="Traffic Counts"
						description="Production of CAD modelling, simulations and rendering for mechanical and civil applications"
						image="stock2"
						link="#"
					/>

					<CardService
						class="h-[25rem]"
						title="Driver behaviour"
						description="Monitoring and analysis of driver behaviours using discrete methods and experienced experts"
						image="driverBehaviour"
						link="#"
					/>

					<CardService
						class="h-[25rem]"
						title="Journey Times"
						description="Monitoring and analysis of driver behaviours using discrete methods and experienced experts"
						image="stock3"
						link="#"
					/>

					<CardService
						class="h-[25rem]"
						title="Traffic Speed"
						description="Automated and manual data collection using radar and laser technology"
						image="trafficSpeed"
						link="#"
					/>

					<CardService
						class="h-[25rem]"
						title="Drone surveys"
						description="Traffic count and movement analytics, video, photogrammetry and LIDAR"
						image="droneSurveys"
						link="#"
					/>

					<CardService
						class="h-[25rem]"
						title="Turning Counts"
						description="Video analysis of junctions to measure performance and identify patterns"
						image="turningCounts"
						link="#"
					/>

					<CardService
						class="h-[25rem]"
						title="Parking"
						description="Define demand and usage for parking both on and off street"
						image="parking"
						link="#"
					/>

					<CardService
						class="h-[25rem]"
						title="Public Transport"
						description="Monitoring and Data Analysis of public transportation routing and utilisation"
						image="publicTransport"
						link="#"
					/>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
