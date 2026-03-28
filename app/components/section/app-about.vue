<script lang="ts" setup>
	const {
		portfolio: { bio },
		style
	} = useAppConfig();
</script>

<template>
	<div id="about" class="grid-rows-1">
		<p
			v-if="bio.html"
			:class="[
				'animate-element leading-relaxed col-span-full font-medium gap-4 text-zinc-700 dark:text-zinc-300 text-lg sm:text-xl lg:text-2xl',
				style?.roundedStyle
			]"
			v-html="bio.html"></p>
		<p
			v-else
			:class="[
				'animate-element leading-relaxed col-span-full font-medium gap-4 text-zinc-700 dark:text-zinc-300 text-lg sm:text-xl lg:text-2xl',
				style?.roundedStyle
			]">
			{{ bio.text }}
		</p>
	</div>
</template>
