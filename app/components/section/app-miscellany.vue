<script lang="ts" setup>
	const { portfolio, style } = useAppConfig();

	const {
		cta: { contact, location, link }
	} = portfolio;

	const { roundedStyle } = style;
</script>

<template>
	<div
		class="grid-rows-1 grid-cols-1! sm:grid-cols-[repeat(auto-fit,minmax(100px,1fr))]!">
		<!-- Link -->
		<nuxt-link
			v-if="link"
			:to="link.url"
			:external="true"
			:class="[
				'animate-element flex flex-col items-center justify-center gap-y-2 focus-visible:global-focus hover:scale-105!',
				roundedStyle
			]">
			<Icon
				name="ph:arrow-square-up-right-duotone"
				class="text-3xl lg:text-4xl text-primary" />
			<span class="text-center text-lg">
				{{ link.label }}
			</span>
		</nuxt-link>

		<!-- Location -->
		<p
			:class="[
				'animate-element flex flex-col items-center justify-center gap-y-2',
				roundedStyle
			]">
			<Icon
				name="ph:map-pin-duotone"
				class="text-3xl lg:text-4xl text-primary" />
			<span class="text-center text-lg"> {{ location }} </span>
		</p>

		<!-- Contact -->
		<p
			:class="[
				'animate-element flex flex-col items-center justify-center gap-y-2',
				roundedStyle
			]">
			<Icon
				name="ph:chat-circle-text-duotone"
				class="text-3xl lg:text-4xl text-primary" />
			<span class="text-center text-lg">
				{{ contact }}
			</span>
		</p>
	</div>
</template>
