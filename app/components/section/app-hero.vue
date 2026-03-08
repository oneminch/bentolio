<script lang="ts" setup>
  import type { SocialMediaKey, SocialMediaValue } from '~/lib/types';
  import { getSocialMediaClass, getSocialMediaIcon } from '~/lib/utils';

  const { portfolio, style } = useAppConfig();

  const { name, subtitle, avatar, company, socials } = portfolio;

  const firstFourSocials = Object.entries(socials).slice(0, 4) as [
    SocialMediaKey,
    SocialMediaValue
  ][];

  const numSocials = Object.entries(firstFourSocials).length;
  const socialLinkClass = {
    'col-span-full lg:col-span-4 lg:row-span-2': numSocials === 1,
    'col-span-6 lg:col-span-4': numSocials === 2,
    'col-span-4 last:col-span-4 lg:col-span-2 lg:last:col-span-4':
      numSocials === 3,
    'col-span-3 lg:col-span-2': numSocials === 4
  };
</script>

<template>
  <div
    id="hero"
    class="grid-rows-2">
    <!-- Intro -->
    <div
      :class="[
        'animate-element flex flex-col justify-center col-span-full lg:col-span-8 row-span-2',
        style?.roundedStyle
      ]">
      <img
        v-if="avatar"
        :src="avatar"
        alt="My Profile Picture"
        class="image-ring size-20 mt-2.5 mb-5 mx-auto lg:mx-0 bg-transparent rounded-full p-0.5" />

      <div class="space-y-4 mt-5 mb-2.5">
        <h1
          class="text-2xl sm:text-3xl lg:text-4xl text-center lg:text-left font-bold *:inline-block">
          Hi, I'm {{ name }}
          <span id="wave">👋</span>
        </h1>
        <h2
          class="text-center lg:text-left font-bold *:inline-block text-mist-500 dark:text-theme text-xl sm:text-2xl lg:text-3xl">
          <span>{{ subtitle }}</span><span v-if="company">&nbsp;@&nbsp;{{ company }}</span>
        </h2>
      </div>
    </div>

    <!-- Social Media -->
    <template
      v-for="[key, item] in firstFourSocials"
      :key="key">
      <social-media-link
        v-if="item"
        :to="item.profileUrl"
        :name="key"
        :icon="getSocialMediaIcon(key)"
        :class="[
          'animate-element',
          socialLinkClass,
          getSocialMediaClass(key),
          style?.roundedStyle
        ]" />
    </template>
  </div>
</template>
