<script lang="ts" setup>
  import type { PostItem } from '~/lib/types';

  withDefaults(
    defineProps<{
      item: PostItem;
      simple?: boolean;
    }>(),
    {
      simple: true
    }
  );
</script>

<template>
  <li>
    <nuxt-link
      :to="item.path"
      title="Post URL"
      class="flex items-center justify-between gap-4 hover:*:text-theme/75 text-sm focus-visible:global-focus">
      <h4
        class="min-w-0 truncate text-mist-800 dark:text-mist-100 font-medium sm:text-base"
        :title="item.title">
        {{ item.title }}
      </h4>

      <span
        v-if="item.date || !simple"
        class="dash-trail"></span>

      <div class="flex items-center gap-2 shrink-0">
        <p
          v-if="item.date"
          class="whitespace-nowrap text-mist-600 dark:text-mist-400">
          {{
            new Date(item.date).toLocaleDateString("en-us", {
              month: "short",
              day: "2-digit",
              year: "numeric"
            })
          }}
        </p>

        <span
          v-if="!simple && item.date"
          class="size-0.5 rounded-full bg-foreground/25"></span>

        <Icon
          v-if="!simple"
          name="ph:caret-right" />
      </div>
    </nuxt-link>
  </li>
</template>
