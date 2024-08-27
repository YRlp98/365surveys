<template>
	<div class="flex items-center">
		<!-- <div class="scroll-icon"></div> -->
		<p>scroll down</p>
	</div>
</template>

<style scoped>
.scroll-icon {
	position: relative;
	width: 18px;
	height: 24px;
	box-shadow: inset 0 0 0 1px var(--gray-3);
	border-radius: 25px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 0.5rem;
}

.scroll-icon:before {
	content: "";
	width: 4px;
	height: 4px;
	background: var(--gray-3);
	border-radius: 50%;
	animation: scroll 1.5s infinite;
}

@keyframes scroll {
	0% {
		opacity: 1;
		transform: translateY(0);
	}
	100% {
		opacity: 0;
		transform: translateY(8px);
	}
}

p {
	position: relative;
	text-transform: uppercase;
	font-size: 1em;
	letter-spacing: 4px;
	overflow: hidden;
	background: linear-gradient(90deg, var(--black-3), var(--gray-4), var(--black-3));
	background-repeat: no-repeat;
	background-size: 80%;
	animation: animate 3s linear infinite;
	-webkit-background-clip: text;
	-webkit-text-fill-color: rgba(30, 32, 35, 0);
}

@keyframes animate {
	0% {
		background-position: -500%;
	}
	100% {
		background-position: 500%;
	}
}
</style>
