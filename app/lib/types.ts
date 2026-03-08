import type { PostsCollectionItem } from '@nuxt/content';

export type PostItem = Pick<
  PostsCollectionItem,
  'id' | 'title' | 'path' | 'date'
>;

export interface ProjectItem {
  title: string;
  description?: string;
  repoUrl?: string;
  homepageUrl: string;
  iconUrl?: string;
}

export type SocialMediaKey
  = | 'Bluesky'
    | 'GitHub'
    | 'LinkedIn'
    | 'Mastodon'
    | 'Twitch'
    | 'X'
    | 'YouTube'
    | 'Default';

export interface SocialMediaValue {
  profileUrl: string;
}

export type SocialMediaMetadata = Record<
  SocialMediaKey,
  {
    cssClass: string;
    iconName: string;
  }
>;

export interface Portfolio {
  name: string;
  subtitle: string;
  avatar?: string;
  customOgImage?: string;
  company?: string;
  socials: Partial<Record<SocialMediaKey, SocialMediaValue>>;
  bio: {
    html?: string;
    text: string;
  };
  projects?: ProjectItem[];
  cta: {
    contact?: string;
    location?: string;
    link?: { url: string; label: string };
  };
}

export interface Style {
  roundedStyle:
    | 'rounded-none'
    | 'rounded-tiny'
    | 'rounded-medium'
    | 'rounded-super';
  separateSections: boolean;
}

declare module 'nuxt/schema' {
  interface AppConfigInput {
    portfolio: Portfolio;
    style?: Style;
  }

  interface AppConfig {
    portfolio: Portfolio;
    style?: Style;
  }
}
