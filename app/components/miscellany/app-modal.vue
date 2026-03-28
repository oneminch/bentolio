<!-- eslint-disable vue/require-default-prop -->
<script setup lang="ts">
	import { useMediaQuery, useScroll } from '@vueuse/core';
	import { useTemplateRef } from 'vue';
	import { Button } from '@/components/ui/button';
	import {
		Dialog,
		DialogClose,
		DialogContent,
		DialogHeader,
		DialogTitle,
		DialogTrigger
	} from '@/components/ui/dialog';
	import {
		Drawer,
		DrawerClose,
		DrawerContent,
		DrawerHeader,
		DrawerTitle,
		DrawerTrigger
	} from '@/components/ui/drawer';

	withDefaults(
		defineProps<{
			title?: string;
			triggerText?: string;
			icon: string;
		}>(),
		{
			triggerText: 'View All'
		}
	);

	const isDesktop = useMediaQuery('(min-width: 640px)');
	const { style } = useAppConfig();

	const content = useTemplateRef('content');
	const { y } = useScroll(content);

	const Modal = computed(() => ({
		Root: isDesktop.value ? Dialog : Drawer,
		Trigger: isDesktop.value ? DialogTrigger : DrawerTrigger,
		Close: isDesktop.value ? DialogClose : DrawerClose,
		Content: isDesktop.value ? DialogContent : DrawerContent,
		Header: isDesktop.value ? DialogHeader : DrawerHeader,
		Title: isDesktop.value ? DialogTitle : DrawerTitle
	}));
	const modalCloseIcon = computed(() =>
		isDesktop.value ? 'ph:x' : 'ph:caret-down'
	);
	const isContentScrolled = computed(() => y.value > 5);

	const open = ref(false);
</script>

<template>
	<component :is="Modal.Root" v-model:open="open">
		<component :is="Modal.Trigger" as-child>
			<Button
				variant="outline"
				class="w-auto! h-auto py-1 px-4 rounded-full text-sm font-normal mt-auto">
				{{ triggerText }}
			</Button>
		</component>
		<component
			:is="Modal.Content"
			class="flex flex-col w-full sm:w-5/6 sm:max-w-5xl gap-0 h-full max-h-3/4 bg-card overflow-hidden p-0 *:sm:px-6 *:py-4"
			:class="[{ '*:px-4': !isDesktop }]">
			<component
				:is="Modal.Header"
				class="flex flex-row items-center justify-between bg-card border-b text-theme **:text-xl **:sm:text-2xl">
				<div class="flex items-center gap-2.5">
					<component :is="Modal.Title" v-if="title">
						{{ title }}
					</component>

					<Icon :name="icon" class="opacity-50" />
				</div>

				<component
					:is="Modal.Close"
					:class="[
						'text-muted-foreground cursor-pointer focus-visible:global-focus',
						style?.roundedStyle
					]">
					<Icon :name="modalCloseIcon" />
					<span class="sr-only">Close</span>
				</component>
			</component>

			<div
				ref="content"
				:class="[
					'bg-background overflow-y-auto flex-1 min-h-0',
					{
						'inset-shadow-sm': isContentScrolled
					}
				]">
				<slot />
			</div>
		</component>
	</component>
</template>
