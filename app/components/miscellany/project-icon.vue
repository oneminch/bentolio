<script setup lang="ts">
	import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

	withDefaults(
		defineProps<{
			iconUrl?: string;
			projectTitle: string;
		}>(),
		{
			iconUrl: ''
		}
	);
</script>

<template>
	<Avatar class="rounded-none size-6">
		<AvatarImage :src="iconUrl" :alt="`Icon for ${projectTitle}`" />
		<AvatarFallback class="image-ring ring-inset ring-theme/25 bg-theme/25">{{
			projectTitle.at(0)
		}}</AvatarFallback>
	</Avatar>
</template>
