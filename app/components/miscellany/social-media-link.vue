<script setup lang="ts">
  import type { SocialMediaKey, SocialMediaValue } from '~';

  defineProps<{
    name: SocialMediaKey;
    icon: string;
    to: SocialMediaValue['profileUrl'];
  }>();
</script>

<template>
  <nuxt-link
    :to="to"
    :title="name"
    :aria-label="name"
    :external="true"
    class="flex items-center justify-center text-2xl sm:text-4xl p-0! hover:scale-105! focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:global-focus">
    <Icon :name="icon" />
  </nuxt-link>
</template>
