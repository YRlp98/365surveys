<template>
	<form
		action="https://submit-form.com/bKrcsIPYA"
		class="text-left relative min-w-[250px] max-w-[27rem] space-y-4 z-10 flex-1"
	>
		<div class="flex lg:flex-row justify-between gap-4">
			<div class="flex flex-col items-start">
				<label for="firstName" class="mb-1 ml-3 text-gray-4">First Name</label>
				<input
					type="text"
					id="firstName"
					name="First name"
					placeholder="First Name"
					required=""
					class="w-full bg-gray-1 rounded-lg placeholder-gray-4 text-gray-5 p-4 border-none outline-none"
				/>
			</div>

			<div class="flex flex-col items-start">
				<label for="lastName" class="mb-1 ml-3 text-gray-4">Last Name</label>
				<input
					type="text"
					id="lastName"
					name="Last name"
					placeholder="Last Name"
					required=""
					class="w-full bg-gray-1 rounded-lg placeholder-gray-4 text-gray-5 p-4 border-none outline-none"
				/>
			</div>
		</div>

		<div class="flex flex-col items-start">
			<label for="email" class="mb-1 ml-3 text-gray-4">Email</label>
			<input
				type="text"
				id="email"
				name="Email"
				placeholder="Email"
				required=""
				class="w-full bg-gray-1 rounded-lg placeholder-gray-4 text-gray-5 p-4 border-none outline-none"
			/>
		</div>

		<div class="flex flex-col items-start">
			<label for="message" class="mb-1 ml-3 text-gray-4">Message</label>
			<textarea
				id="message"
				name="Message"
				placeholder="Message"
				class="w-full h-32 bg-gray-1 rounded-lg placeholder-gray-4 text-gray-5 p-4 border-none outline-none resize-none"
			></textarea>
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

<style scoped>
.button:hover .icon {
	transform: translateX(2px);
}

.icon {
	transition: transform 0.3s ease-in-out;
}
</style>
