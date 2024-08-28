<template>
	<div class="min-h-screen flex flex-col bg-black-3">
		<!-- Hero Section -->
		<section class="custom-wrapper flex-1 pt-32 pb-20">
			<div class="custom-container flex flex-col">
				<!-- Title -->
				<div id="page-title" class="flex items-center text-gray-4 space-x-1.5 mb-8">
					<icon class="text-2xl" name="hugeicons:study-lamp" />
					<h1 class="text-xl font-bold">Case Studies</h1>
				</div>

				<!-- Content Wrapper -->
				<div id="content" class="pt-20 flex-1">
					<CardCaseStudiesFull />
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
