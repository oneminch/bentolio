<script lang="ts" setup>
	import type { PostItem } from '~/lib/types';

	defineProps<{
		item: PostItem;
	}>();
</script>

<template>
	<li>
		<nuxt-link
			:to="item.path"
			title="Post URL"
			class="flex items-center justify-between gap-4 hover:*:text-theme/75 text-sm focus-visible:global-focus">
			<h4 class="text-zinc-800 dark:text-zinc-100 font-medium sm:text-base">
				{{ item.title }}
			</h4>

			<span class="dash-trail"></span>

			<p v-if="item.published_on" class="text-zinc-600 dark:text-zinc-400">
				{{
					new Date(item.published_on).toLocaleDateString('en-us', {
						month: 'short',
						day: '2-digit',
						year: 'numeric'
					})
				}}
			</p>
		</nuxt-link>
	</li>
</template>
