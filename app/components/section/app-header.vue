<script setup lang="ts">
	const {
		portfolio: { name }
	} = useAppConfig();
</script>

<template>
	<header id="header" class="py-2 sm:py-4">
		<nav class="flex items-center justify-between">
			<h2 class="text-center">
				<a
					href="/"
					class="flex items-center gap-x-4 p-1 font-semibold text-xl text-zinc-950 dark:text-zinc-300 focus-visible:global-focus">
					<img
						src="/logo.svg"
						alt="Logo"
						class="image-ring size-10 rounded-xl p-0.5" />
					{{ name }}
				</a>
			</h2>

			<theme-toggle />
		</nav>
	</header>
</template>
