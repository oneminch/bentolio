<script setup lang="ts">
	import '@fontsource/space-grotesk/400.css';
	import '@fontsource/space-grotesk/500.css';
	import '@fontsource/space-grotesk/600.css';
	import '@fontsource/space-grotesk/700.css';

	useAnimateContent();

	const { portfolio } = useAppConfig();

	const { name, subtitle, /*avatar, */ bio, customOgImage } = portfolio;

	useSeoMeta({
		title: `${name} · ${subtitle}`,
		description: bio.text,
		ogTitle: `${name} · ${subtitle}`,
		ogDescription: bio.text,
		ogImage: () => customOgImage ?? '',
		twitterImage: () => customOgImage ?? '',
		twitterCard: 'summary_large_image'
	});

	// defineOgImageComponent('SocialImage', {
	// 	name: name,
	// 	subtitle: subtitle,
	// 	avatar: avatar
	// });

	useHead({
		bodyAttrs: {
			class: 'animate-layout opacity-0'
		}
	});
</script>

<template>
	<div class="space-y-5 sm:space-y-10">
		<app-header />

		<main class="min-h-full">
			<nuxt-layout>
				<nuxt-page />
			</nuxt-layout>
		</main>

		<app-footer />
	</div>
</template>
