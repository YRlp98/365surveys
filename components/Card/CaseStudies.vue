<template>
	<div class="">
		<div class="gallery-wrap">
			<!-- Cards -->
			<NuxtLink
				v-for="(card, index) in cards"
				:key="index"
				:to="card.link"
				:class="[`item item-${index + 1} flex flex-col`, { hovered: currentCardIndex === index }]"
				:style="getItemBorderRadius(index)"
				@mouseenter="setActiveCard(index)"
			>
				<!-- Content -->
				<div class="content z-10 card-content flex-grow p-10 flex flex-col justify-end text-gray-4 hover:text-gray-5">
					<!-- Title -->
					<div class="flex items-center justify-between">
						<h3 class="text-2xl font-bold tracking-widest">{{ card.title }}</h3>
						<Icon class="text-2xl" name="material-symbols:arrows-more-up" />
					</div>
					<!-- Description -->
					<div class="mt-6 text-base">
						{{ card.description }}
					</div>
				</div>
			</NuxtLink>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Card {
	title: string;
	description: string;
	link: string;
}

const props = defineProps({
	cards: {
		type: Array as PropType<Card[]>,
		required: true,
		validator(value: Card[]): boolean {
			return value.every(
				(item: Card) =>
					item.hasOwnProperty("title") && item.hasOwnProperty("description") && item.hasOwnProperty("link")
			);
		},
	},
});

const currentCardIndex = ref(0);
const currentCard = ref(props.cards[currentCardIndex.value]);

const getItemBorderRadius = computed(() => (index: number) => {
	const totalItems = props.cards.length;

	if (totalItems === 1) {
		return { borderRadius: "12px" };
	} else if (index === 0) {
		return { borderRadius: "12px 0 0 12px" };
	} else if (index === totalItems - 1) {
		return { borderRadius: "0 12px 12px 0" };
	} else {
		return { borderRadius: "0" };
	}
});

const setActiveCard = (index: number) => {
	currentCardIndex.value = index;
	currentCard.value = props.cards[index];
};
</script>

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

.item.hovered,
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

.item.hovered .content,
.item-1 .content {
	opacity: 1;
}

.item:not(.hovered) .content {
	opacity: 0;
}

.item-1 {
	background-image: linear-gradient(to bottom, rgba(15, 16, 18, 0.5) 50%, rgba(30, 32, 35, 1)),
		url("/assets/images/case-studies/case-study-1-p1.jpg");
}

.item-2 {
	background-image: linear-gradient(to bottom, rgba(15, 16, 18, 0.5) 50%, rgba(30, 32, 35, 1)),
		url("/assets/images/case-studies/case-study-2-p3.webp");
}

.item-3 {
	background-image: linear-gradient(to bottom, rgba(15, 16, 18, 0.5) 50%, rgba(30, 32, 35, 1)),
		url("/assets/images/stock3.jpg");
}

.item-4 {
	background-image: linear-gradient(to bottom, rgba(15, 16, 18, 0.5) 50%, rgba(30, 32, 35, 1)),
		url("/assets/images/stock4.jpg");
}
</style>
