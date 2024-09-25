<template>
	<div class="">
		<div class="gallery-wrap">
			<!-- Item 1 -->
			<NuxtLink class="item item-1 flex flex-col" to="/case-studies/A382-Drumbridges-to-Newton-Abbot">
				<!-- Content -->
				<div
					class="content file:z-10 card-content flex-grow p-10 flex flex-col justify-end text-gray-4 hover:text-gray-5"
				>
					<!-- Title -->
					<div class="flex items-center justify-between">
						<h3 class="text-2xl font-bold tracking-widest">A382 Drumbridges to Newton Abbot</h3>
						<Icon class="text-2xl" name="material-symbols:arrows-more-up" />
					</div>
					<!-- Description -->
					<div class="mt-6 text-base">
						Production of CAD modelling, simulations and rendering for mechanical and civil applications.
					</div>
				</div>
			</NuxtLink>

			<!-- Item 2 -->
			<NuxtLink
				class="item item-2 flex flex-col"
				to="/case-studies/A360-Traffic-Management-Part-of-Stonehenge-Amesbury-to-Berwick-Down"
			>
				<!-- Content -->
				<div
					class="content file:z-10 card-content flex-grow p-10 flex flex-col justify-end text-gray-4 hover:text-gray-5"
				>
					<!-- Title -->
					<div class="flex items-center justify-between">
						<h3 class="text-2xl font-bold tracking-widest">
							A360 Traffic Management - Part of Stonehenge Amesbury to Berwick Down
						</h3>
						<Icon class="text-2xl" name="material-symbols:arrows-more-up" />
					</div>
					<!-- Description -->
					<div class="mt-6 text-base">
						The A303 Stonehenge project remains as one of the most complex and sensitive projects investigated in the UK
						in recent history. Our experts supported the project construction team with highly detailed data and
						analysis to inform strategic decision making
					</div>
				</div>
			</NuxtLink>

			<!-- Item 3 -->
			<NuxtLink class="item item-3 flex flex-col" to="#">
				<!-- Content -->
				<div
					class="content file:z-10 card-content flex-grow p-10 flex flex-col justify-end text-gray-4 hover:text-gray-5"
				>
					<!-- Title -->
					<div class="flex items-center justify-between">
						<h3 class="text-2xl font-bold tracking-widest">A64 Traffic Management</h3>
						<Icon class="text-2xl" name="material-symbols:arrows-more-up" />
					</div>
					<!-- Description -->
					<div class="mt-6 text-base">
						Production of CAD modelling, simulations and rendering for mechanical and civil applications.
					</div>
				</div>
			</NuxtLink>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped>
.gallery-wrap {
	display: flex;
	flex-direction: row;
	height: 26.25rem;
	flex-wrap: wrap;
}

.item {
	cursor: pointer;
	flex: 1;
	height: 100%;
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	overflow: hidden;
	mix-blend-mode: var(--blend-mode);
	filter: grayscale(1) saturate(0) brightness(var(--photo-brightness)) contrast(var(--photo-contrast));
	transition: flex 0.4s cubic-bezier(0.32, 0.79, 0.38, 0.99), filter 0.5s cubic-bezier(0.86, 0, 0.07, 1);
}

.item:hover {
	flex: 7;
	filter: grayscale(0) saturate(1.3) blur(0px);
}

.item:hover .content {
	opacity: 1;
}

.item::before {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background: radial-gradient(circle closest-side, var(--point-color) var(--point-size), transparent var(--point-size));
	background-size: var(--point-spacing) var(--point-spacing);
	filter: contrast(var(--line-contrast));
	transition: opacity 0.2s cubic-bezier(0.86, 0, 0.07, 1);
	opacity: 0.3;
	pointer-events: none;
}

.item:hover::before {
	opacity: 0;
}

.content {
	transition: opacity 0.2s ease, backdrop-filter 1s cubic-bezier(0.86, 0, 0.07, 1);
	opacity: 0;
}

.item-1 {
	border-radius: 12px 0 0 12px;
	background-image: linear-gradient(to bottom, rgba(15, 16, 18, 0.5) 50%, rgba(30, 32, 35, 1)),
		url("/assets/images/case-studies/case-study-1-p1.jpg");
}

.item-2 {
	border-radius: 0 0 0 0;
	background-image: linear-gradient(to bottom, rgba(15, 16, 18, 0.5) 50%, rgba(30, 32, 35, 1)),
		url("/assets/images/case-studies/case-study-2-p3.webp");
}

.item-3 {
	border-radius: 0 12px 12px 0;
	background-image: linear-gradient(to bottom, rgba(15, 16, 18, 0.5) 50%, rgba(30, 32, 35, 1)),
		url("/assets/images/stock3.jpg");
}
</style>
