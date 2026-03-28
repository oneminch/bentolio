<script lang="ts" setup>
	import type { ProjectItem } from '~/lib/types';

	defineProps<{
		item: ProjectItem;
	}>();

	const { style } = useAppConfig();
</script>

<template>
	<li
		:class="[
			'card flex flex-col items-start justify-between gap-6',
			style?.roundedStyle
		]">
		<div class="flex flex-col items-start justify-between gap-3">
			<div class="flex items-center justify-between gap-2">
				<project-icon :icon-url="item.iconUrl" :project-title="item.title" />

				<h4 class="font-medium text-base sm:text-lg">
					{{ item.title }}
				</h4>
			</div>
			<p class="text-sm text-zinc-600 dark:text-zinc-400">
				{{ item.description }}
			</p>
		</div>

		<div class="flex items-center gap-2.5 text-base">
			<nuxt-link
				:to="item.repoUrl"
				title="Repo URL"
				:class="['card-link', style?.roundedStyle]">
				Repo
				<Icon name="ph:git-branch-duotone" />
			</nuxt-link>
			<nuxt-link
				:to="item.homepageUrl"
				title="Homepage URL"
				:class="['card-link', style?.roundedStyle]">
				Homepage
				<Icon name="ph:arrow-up-right" />
			</nuxt-link>
		</div>
	</li>
</template>
