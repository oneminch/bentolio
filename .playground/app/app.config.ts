export default defineAppConfig({
  style: {
    roundedStyle: 'rounded-medium'
  },
  portfolio: {
    name: 'Dawit',
    subtitle: 'I Craft Delightful Web Apps',
    // company: '[COMPANY]',
    avatar: '/profile.jpg',
    customOgImage: '/og-image.png',
    bio: {
      html: 'I\'m a Full-Stack Problem-Solver specializing in <span class=\'font-bold text-theme\'>Vue</span>, <span class=\'font-bold text-theme\'>Nuxt</span>, <span class=\'font-bold text-theme\'>Tailwind CSS</span>, and <span class=\'font-bold text-theme\'>Node</span>. I sometimes write articles on various software development topics. I\'m also a hobbyist photographer.',
      text: 'I\'m a Full-Stack Problem-Solver Specializing in Vue, Nuxt, Tailwind CSS and Node.js. I Sometimes Write Articles on Various Web Dev Topics. I\'m Also a Hobbyist Photographer.'
    },
    socials: {
      Bluesky: {
        profileUrl: 'https://bsky.app/profile/minch.dev'
      },
      GitHub: {
        profileUrl: 'https://github.com/oneminch'
      },
      X: {
        profileUrl: 'https://x.com/oneminch'
      },
      LinkedIn: {
        profileUrl: 'https://linkedin.com/in/oneminch'
      }
    },
    projects: [
      {
        iconUrl: 'https://icons.encryptedlist.xyz/logo.svg',
        title: 'EncryptedList',
        description: 'EncryptedList is a website.',
        repoUrl: 'https://github.com/oneminch/encrypted-list',
        homepageUrl: 'https://encryptedlist.xyz/'
      },
      {
        iconUrl: 'https://nuxt-feedback.minch.dev/logo.svg',
        title: 'Nuxt Feedback',
        description: 'Nuxt Feedback is a Nuxt module.',
        repoUrl: 'https://github.com/oneminch/nuxt-feedback',
        homepageUrl: 'https://nuxt-feedback.minch.dev/'
      },
      {
        iconUrl: 'https://nuxt-basis.minch.dev/logo.svg',
        title: 'Nuxt Basis',
        description: 'Nuxt Basis is a Nuxt layer and template.',
        repoUrl: 'https://github.com/oneminch/nuxt-basis',
        homepageUrl: 'https://nuxt-basis.minch.dev/'
      },
      {
        iconUrl: 'https://icons.encryptedlist.xyz/logo.svg',
        title: 'EncryptedList',
        repoUrl: 'https://github.com/oneminch/encrypted-list',
        homepageUrl: 'https://encryptedlist.xyz/'
      },
      {
        iconUrl: 'https://nuxt-feedback.minch.dev/logo.svg',
        title: 'Nuxtastic',
        homepageUrl: 'https://nuxt-feedback.minch.dev/'
      },
      {
        iconUrl: 'https://nuxt-basis.minch.dev/logo.svg',
        title: 'Nuxtables',
        description: 'Nuxt Basis is a Nuxt layer and template.',
        homepageUrl: 'https://nuxt-basis.minch.dev/'
      },
      {
        iconUrl: 'https://icons.encryptedlist.xyz/logo.svg',
        title: 'Bentolio',
        description: 'EncryptedList is a website.',
        repoUrl: 'https://github.com/oneminch/encrypted-list',
        homepageUrl: 'https://encryptedlist.xyz/'
      },
      {
        iconUrl: 'https://nuxt-feedback.minch.dev/logo.svg',
        title: 'Deadlines',
        description: 'Nuxt Feedback is a Nuxt module.',
        repoUrl: 'https://github.com/oneminch/nuxt-feedback',
        homepageUrl: 'https://nuxt-feedback.minch.dev/'
      }
    ],
    cta: {
      contact: '[firstname]@example.com',
      location: 'Planet Earth',
      link: {
        url: 'https://github.com/oneminch/bentolio',
        label: 'Source Code'
      }
    }
  }
});
