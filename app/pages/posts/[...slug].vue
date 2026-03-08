<script setup>
  const { portfolio, style } = useAppConfig();

  const { name } = portfolio;
  // , subtitle, /*avatar, */ bio, customOgImage

  useHead({
    titleTemplate: `%s | Posts · ${name}`
  });

  const route = useRoute();

  const { data: page } = await useAsyncData(route.path, () =>
    queryCollection('posts').path(route.path).first()
  );

  // useSeoMeta({
  //   title: `${name} · ${subtitle}`,
  //   description: bio.text,
  //   ogTitle: `${name} · ${subtitle}`,
  //   ogDescription: bio.text,
  //   ogImage: () => customOgImage ?? '',
  //   twitterImage: () => customOgImage ?? '',
  //   twitterCard: 'summary_large_image'
  // });

  // console.log(page);

  // const {
  //   title: postTitle,
  //   description: postDescription,
  //   meta: { image: postCover }
  // } = page.value;

  // const serverMeta = {
  //   ogType: 'article',
  //   ogLocale: 'en_US',
  //   twitterCard: 'summary',
  //   twitterCreator: '@oneminch'
  // };

  // useSeoMeta({
  //   title: () => postTitle,
  //   description: () => postDescription,
  //   ogTitle: () => `${postTitle} | Blog · Dawit`,
  //   twitterTitle: () => `${postTitle} | Blog · Dawit`,
  //   ogDescription: () => postDescription,
  //   twitterDescription: () => postDescription,
  //   ogImage: () => postCover,
  //   twitterImage: () => postCover,
  //   ogUrl: () => `https://minch.dev${route.path}`,
  //   ...serverMeta
  // });
</script>

<template>
  <article
    :class="[
      'w-full max-w-full bento-item *:max-w-3xl *:mx-auto prose-sm lg:prose-base prose-mist prose-img:rounded-xl focus-visible:prose-a:global-focus prose-pre:bg-mist-700 prose-code:leading-snug prose-code:font-normal prose-code:bg-mist-700 prose-code:text-mist-100 prose-code:px-2 prose-code:py-0.5 prose-code:inline-block prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none',
      style?.roundedStyle
    ]">
    <!-- Post Title -->
    <h1 class="mb-4">
      {{ page.title }}
    </h1>
    <!-- Post Cover Image -->
    <img
      v-if="page.meta.image"
      preload
      placeholder
      format="webp"
      loading="lazy"
      height="300"
      :src="page.meta.image"
      :alt="page.title"
      class="text-center" />

    <!-- Table of Contents -->
    <template v-if="page.body.toc.links.length > 0">
      <details
        open
        class="flex flex-col self-start px-4 py-3 mb-2 bg-white border rounded-lg dark:bg-mist-800 border-mist-200 dark:border-mist-700">
        <summary
          class="flex items-center list-none appearance-none cursor-pointer focus:outline-hidden group">
          <span class="inline-block mr-2 text-lg font-bold">Outline</span>
          <Icon
            class="text-green-500 arrow-right group-focus-visible:global-focus rounded-full"
            name="heroicons:chevron-right-20-solid"
            size="1.5rem" />
          <Icon
            class="text-green-500 arrow-down group-focus-visible:global-focus rounded-full"
            name="heroicons:chevron-down-20-solid"
            size="1.5rem" />
        </summary>
        <ol class="my-1">
          <li
            v-for="link of page.body.toc.links"
            :key="link.id">
            <a :href="`#${link.id}`">{{ link.text }}</a>
          </li>
        </ol>
      </details>
    </template>
    <!-- Main Content -->
    <template v-if="page">
      <ContentRenderer :value="page" />
      <!-- <app-divider class="w-1/2 my-8 md:w-2/3" /> -->
      <!-- Let's Connect -->
      <!-- <app-post-footer /> -->
    </template>
    <!-- <app-not-found /> -->
    <p v-else>
      Page Not Found
    </p>
  </article>
</template>

<style scoped>
  /* @reference "../../assets/css/main.css";

  img {
    @apply w-full h-auto object-cover bg-cover origin-center border border-mist-300 dark:border-mist-600;
  }

  details > summary::marker,
  details > summary::-webkit-details-marker {
    @apply hidden;
  }

  Collapsed
  details > summary .arrow-right {
    @apply inline-block;
  }
  details > summary .arrow-down {
    @apply hidden;
  }

  Expanded
  details[open] > summary .arrow-down {
    @apply inline-block;
  }
  details[open] > summary .arrow-right {
    @apply hidden;
  } */
</style>
