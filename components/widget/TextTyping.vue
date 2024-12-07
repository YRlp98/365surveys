<template>
	<div class="middle">
		<div class="text-gray-5">
			<h1 class="text-6xl font-bold">365 SURVEYS</h1>
			<span
				class="txt-rotate text-3xl font-light"
				data-period="2000"
				data-rotate='["Experts in Traffic Data. ", "Supporting your journey to understand locations, behaviours, and deliver insights. "]'
			></span>
		</div>
	</div>
</template>

<script setup lang="ts">
class TxtRotate {
	private toRotate: string[];
	private el: HTMLElement;
	private loopNum: number;
	private period: number;
	private txt: string;
	private isDeleting: boolean;

	constructor(el: HTMLElement, toRotate: string[], period: string | undefined) {
		this.toRotate = toRotate;
		this.el = el;
		this.loopNum = 0;
		this.period = parseInt(period || "4000", 10);
		this.txt = "";
		this.isDeleting = false;
		this.tick();
	}

	private tick() {
		const i = this.loopNum % this.toRotate.length;
		const fullTxt = this.toRotate[i];

		if (this.isDeleting) {
			this.txt = fullTxt.substring(0, this.txt.length - 1);
		} else {
			this.txt = fullTxt.substring(0, this.txt.length + 1);
		}

		this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;

		let delta = 100 - Math.random() * 100;
		if (this.isDeleting) {
			delta /= 2;
		}

		if (!this.isDeleting && this.txt === fullTxt) {
			delta = this.period;
			this.isDeleting = true;
		} else if (this.isDeleting && this.txt === "") {
			this.isDeleting = false;
			this.loopNum++;
			delta = 1000;
		}

		setTimeout(() => {
			this.tick();
		}, delta);
	}
}

onMounted(() => {
	const elements = document.getElementsByClassName("txt-rotate");
	for (let i = 0; i < elements.length; i++) {
		const element = elements[i] as HTMLElement;
		const toRotate = element.getAttribute("data-rotate");
		const period = element.getAttribute("data-period");
		if (toRotate) {
			new TxtRotate(element, JSON.parse(toRotate), period);
		}
	}

	// Inject CSS
	const css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = `
		.txt-rotate > .wrap {
			border-right: 0.08em solid #ACB4BC;
			padding-right: 8px; /* Add space between text and border */
			animation: blink 1s step-end infinite;
		}
		@keyframes blink {
			50% {
				border-color: transparent;
			}
		}
	`;
	document.head.appendChild(css);
});
</script>

<style scoped>
.middle {
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	margin: auto;
	height: 120px;
	width: 100%;
	text-align: start;
}
</style>
