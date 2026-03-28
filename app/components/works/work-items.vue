<script lang="ts" setup>
	import type { Component } from 'vue';
	import type { PostItem, ProjectItem } from '~/lib/types';

	defineProps<{
		show: boolean;
		title: string;
		icon: string;
		itemType: Component;
		items: PostItem[] | ProjectItem[];
	}>();

	const { style } = useAppConfig();
</script>

<template>
	<div
		v-if="show && items.length > 0"
		:class="[
			'animate-element flex flex-col items-center justify-start gap-6 *:w-full',
			style?.roundedStyle
		]">
		<div
			class="text-xl sm:text-2xl flex items-center justify-between text-theme">
			<h3 class="text-center lg:text-left font-bold *:inline-block">
				{{ title }}
			</h3>
			<Icon :name="icon" class="opacity-50" />
		</div>

		<!-- Featured Items -->
		<ul class="space-y-2">
			<component
				:is="itemType"
				v-for="item in items.slice(0, 4)"
				:key="item.title"
				:item="item" />
		</ul>

		<!-- All Items (Modal) -->
		<app-modal :title="title" :icon="icon">
			<slot />
		</app-modal>
	</div>
</template>
