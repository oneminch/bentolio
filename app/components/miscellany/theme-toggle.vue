<script setup lang="ts">
	import { Button } from '@/components/ui/button';

	const colorMode = useColorMode();
	const { style } = useAppConfig();

	const onClick = () =>
		colorMode.value === 'light'
			? (colorMode.preference = 'dark')
			: (colorMode.preference = 'light');
</script>

<template>
	<Button
		variant="ghost"
		size="icon-lg"
		aria-label="Color Mode"
		:class="[
			'flex items-center justify-center focus-visible:global-focus',
			style?.roundedStyle
		]"
		title="Toggle Color Mode"
		@click="onClick">
		<ColorScheme placeholder="...">
			<Icon
				class="size-5"
				:name="
					colorMode.preference === 'dark' ? 'ph:sun-duotone' : 'ph:moon-duotone'
				" />
		</ColorScheme>
	</Button>
</template>
