<script setup lang="ts">
	import type { Portfolio } from '~';

	withDefaults(defineProps<Pick<Portfolio, 'name' | 'subtitle' | 'avatar'>>(), {
		name: 'Full Name',
		subtitle: 'Whatever It Is I Do'
	});
</script>

<template>
	<div
		:style="{
			background:
				'#18181b radial-gradient(circle at 1px 1px, #3f3f46 1px, transparent 0) repeat 0 0 / 20px 20px'
		}"
		class="flex h-full w-full items-center justify-center overflow-hidden p-16 text-neutral-200 bg-neutral-900">
		<div class="flex flex-row items-center justify-center gap-16">
			<div class="flex flex-col items-center justify-around gap-6 text-left">
				<h1 class="text-8xl font-black">{{ name }}</h1>
				<p class="text-4xl font-bold">{{ subtitle }}</p>
			</div>
		</div>
	</div>
</template>
