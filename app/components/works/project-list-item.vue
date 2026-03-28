<script lang="ts" setup>
	import type { ProjectItem } from '~/lib/types';

	defineProps<{
		item: ProjectItem;
	}>();
</script>

<template>
	<li class="flex items-center justify-between gap-4 first:h-7 last:h-7">
		<div class="flex items-center gap-2">
			<project-icon
				class="size-5"
				:icon-url="item.iconUrl"
				:project-title="item.title" />

			<h4 class="font-medium text-sm sm:text-base">
				{{ item.title }}
			</h4>
		</div>

		<span class="dash-trail"></span>

		<div class="flex items-center gap-2 text-xl *:hover:text-theme">
			<nuxt-link
				:to="item.repoUrl"
				title="Repo URL"
				class="focus-visible:global-focus">
				<span class="sr-only">Repo URL</span>
				<Icon name="ph:git-branch-duotone" />
			</nuxt-link>

			<span class="size-0.5 bg-foreground/25"></span>

			<nuxt-link
				:to="item.homepageUrl"
				title="Homepage URL"
				class="focus-visible:global-focus">
				<span class="sr-only">Homepage URL</span>
				<Icon name="ph:arrow-up-right" />
			</nuxt-link>
		</div>
	</li>
</template>
