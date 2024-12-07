<template>
	<form @submit.prevent="submitForm" class="text-left relative w-full space-y-4 z-10 flex-1">
		<!-- Name -->
		<div class="flex flex-col items-start">
			<label for="name" class="mb-1 ml-3 text-gray-4">Name <span class="text-primary">*</span></label>
			<input
				type="text"
				id="name"
				v-model="form.name"
				name="name"
				placeholder="Name"
				required
				class="w-full bg-gray-1 rounded-lg placeholder-gray-4 text-gray-5 p-4 border-none outline-none"
			/>
		</div>

		<!-- Email -->
		<div class="flex flex-col items-start">
			<label for="email" class="mb-1 ml-3 text-gray-4">Email <span class="text-primary">*</span></label>
			<input
				type="email"
				id="email"
				v-model="form.email"
				name="Email"
				placeholder="Email"
				required
				class="w-full bg-gray-1 rounded-lg placeholder-gray-4 text-gray-5 p-4 border-none outline-none"
			/>
		</div>

		<!-- Telephone -->
		<div class="flex flex-col items-start">
			<label for="telephone" class="mb-1 ml-3 text-gray-4">Telephone</label>
			<input
				type="tel"
				id="telephone"
				v-model="form.telephone"
				name="Telephone"
				placeholder="Telephone"
				class="w-full bg-gray-1 rounded-lg placeholder-gray-4 text-gray-5 p-4 border-none outline-none"
			/>
		</div>

		<!-- Message -->
		<div class="flex flex-col items-start">
			<label for="message" class="mb-1 ml-3 text-gray-4">Message <span class="text-primary">*</span></label>
			<textarea
				id="message"
				v-model="form.message"
				name="Message"
				placeholder="Message"
				required
				class="w-full h-32 bg-gray-1 rounded-lg placeholder-gray-4 text-gray-5 p-4 border-none outline-none resize-none"
			></textarea>
		</div>

		<!-- CAPTCHA -->
		<div v-if="captcha.image" class="flex lg:flex-row justify-between gap-4">
			<img :src="'data:image/png;base64,' + captcha.image" alt="CAPTCHA" class="rounded-lg" />
			<input
				type="text"
				v-model="form.captchaValue"
				placeholder="Enter CAPTCHA"
				required
				class="w-full bg-gray-1 rounded-lg placeholder-gray-4 text-gray-5 p-4 border-none outline-none"
			/>
		</div>

		<Button
			type="submit"
			class="button relative flex items-center justify-center space-x-2 p-4 rounded-[12px] bg-primary shadow-lg cursor-pointer w-full hover:bg-primary/90"
		>
			<span class="text-white">Send Message</span>
			<icon class="icon text-lg" name="iconamoon:send-fill" />
		</Button>
	</form>
</template>

<script setup lang="ts">
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const CAPTCHA_ENDPOINT = import.meta.env.VITE_CAPTCHA_ENDPOINT;
const CONTACT_FORM_ENDPOINT = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;

const fullUrl = new URL(CONTACT_FORM_ENDPOINT, API_BASE_URL).href;
console.log("Full URL:", fullUrl);

const form = ref({
	name: "Yousef",
	email: "hello@yrlp.ir",
	telephone: "",
	message: "hi mom",
	captchaValue: "",
});

const captcha = ref({
	token: "",
	image: "",
});

const fetchCaptcha = async () => {
	try {
		const response = await fetch(`${API_BASE_URL}${CAPTCHA_ENDPOINT}`);
		const data = await response.json();
		captcha.value.token = data.token;
		captcha.value.image = data.image_base_64;
	} catch (error) {
		console.error("Error fetching CAPTCHA:", error);
	}
};

const submitForm = async () => {
	const payload = {
		name: form.value.name,
		email: form.value.email,
		telephone: form.value.telephone,
		message: form.value.message,
		captcha_token: captcha.value.token,
		captcha_value: form.value.captchaValue,
	};

	try {
		const response = await axios.post(`${API_BASE_URL}${CONTACT_FORM_ENDPOINT}`, payload, {
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			// withCredentials: true,
		});

		if (response.status === 200) {
			alert("Message sent successfully!");
			resetForm();
		} else {
			alert("Failed to send the message. Please try again.");
		}
	} catch (error) {
		console.error("Error submitting the form:", error);
		alert("Error submitting the form.");
	}
};

const resetForm = () => {
	form.value = {
		name: "",
		email: "",
		telephone: "",
		message: "",
		captchaValue: "",
	};
	fetchCaptcha();
};

onMounted(fetchCaptcha);
</script>

<style scoped>
.button:hover .icon {
	transform: translateX(2px);
}

.icon {
	transition: transform 0.3s ease-in-out;
}
</style>
