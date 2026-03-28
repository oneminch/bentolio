<script setup lang="ts">
	const { style } = useAppConfig();
</script>

<template>
	<article class="flex flex-col gap-4 *:bento-section *:*:bento-item">
		<!-- Hero -->
		<app-hero />

		<section-divider v-if="style?.separateSections" />

		<!-- About -->
		<app-about />

		<section-divider v-if="style?.separateSections" />

		<!-- Works -->
		<app-works />

		<section-divider v-if="style?.separateSections" />

		<!-- Miscellany -->
		<app-miscellany />
	</article>
</template>
