<script setup lang="ts">
	import type { SocialMediaKey, SocialMediaValue } from '~';

	defineProps<{
		name: SocialMediaKey;
		icon: SocialMediaValue['socialMediaIcon'];
		to: SocialMediaValue['profileUrl'];
		style: {
			backgroundColor: SocialMediaValue['socialMediaBgColor'];
			borderColor: SocialMediaValue['socialMediaBorderColor'];
			textColor: SocialMediaValue['socialMediaTextColor'];
		};
	}>();
</script>

<template>
	<nuxt-link
		:to="to"
		:title="name"
		:aria-label="name"
		:external="true"
		:class="[
			'flex items-center justify-center text-2xl sm:text-3xl p-0! hover:scale-105! focus-visible:global-focus',
			style.backgroundColor,
			style.textColor,
			style.borderColor
		]">
		<Icon :name="icon" />
	</nuxt-link>
</template>
