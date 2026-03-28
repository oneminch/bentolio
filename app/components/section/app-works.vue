<script lang="ts" setup>
	import PostListItem from '../works/post-list-item.vue';
	import ProjectListItem from '../works/project-list-item.vue';

	const { postsAvailable, posts, projectsAvailable, projects } =
		await useWorks();
</script>

<template>
	<div
		id="works"
		class="grid-rows-1 grid-cols-1! sm:grid-cols-[repeat(auto-fit,minmax(100px,1fr))]!">
		<!-- Projects -->
		<work-items
			:show="projectsAvailable"
			title="Projects"
			icon="ph:flask-duotone"
			:items="projects"
			:item-type="ProjectListItem">
			<ul class="bento-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
				<project-card-item
					v-for="project in projects"
					:key="project.title"
					:item="project" />
			</ul>
		</work-items>

		<!-- Posts -->
		<work-items
			:show="postsAvailable"
			title="Posts"
			icon="ph:pen-nib-duotone"
			:items="posts"
			:item-type="PostListItem">
			<ul class="flex flex-col gap-4">
				<post-list-item v-for="post in posts" :key="post.title" :item="post" />
			</ul>
		</work-items>
	</div>
</template>
