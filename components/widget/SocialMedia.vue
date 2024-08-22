<template>
	<div class="flex flex-wrap items-center gap-6 text-gray-4 text-base font-bold">
		<a
			href="https://telegram.com/"
			target="_blank"
			class="nav-social flex items-center uppercase cursor-pointer gap-1.5"
		>
			<Icon name="ic:twotone-telegram" class="text-xl" />
			telegram
		</a>

		<a
			href="https://instagram.com/"
			target="_blank"
			class="nav-social flex items-center uppercase cursor-pointer gap-1.5"
		>
			<Icon name="mdi:instagram" class="text-xl" />
			instagram
		</a>

		<a href="https://x.com/" target="_blank" class="nav-social flex items-center uppercase cursor-pointer gap-1.5">
			<Icon name="hugeicons:new-twitter" class="text-xl" />
			x
		</a>

		<a
			href="https://facebook.com/"
			target="_blank"
			class="nav-social flex items-center uppercase cursor-pointer gap-1.5"
		>
			<Icon name="ic:sharp-facebook" class="text-xl" />
			facebook
		</a>

		<a
			href="https://linkedin.com/"
			target="_blank"
			class="nav-social flex items-center uppercase cursor-pointer gap-1.5"
		>
			<Icon name="mdi:linkedin" class="text-xl" />
			linkedin
		</a>
	</div>
</template>

<style scoped>
.nav-social:hover {
	transition: transform 0.5s ease;
	transform: translateY(0.25rem);
}
</style>
