import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { SocialMediaKey, SocialMediaMetadata } from '~';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const socialMediaMetada: SocialMediaMetadata = {
  Bluesky: { cssClass: 'bluesky-social!', iconName: 'simple-icons:bluesky' },
  GitHub: { cssClass: 'github-social!', iconName: 'simple-icons:github' },
  LinkedIn: { cssClass: 'linkedin-social!', iconName: 'simple-icons:linkedin' },
  Mastodon: { cssClass: 'mastodon-social!', iconName: 'simple-icons:mastodon' },
  X: { cssClass: 'x-social!', iconName: 'simple-icons:x' },
  YouTube: { cssClass: 'youtube-social!', iconName: 'simple-icons:youtube' },
  Twitch: { cssClass: 'twitch-social!', iconName: 'simple-icons:twitch' },
  Default: { cssClass: 'default-social!', iconName: 'ph:link-simple-bold' }
};

export const getSocialMediaClass = (siteKey: SocialMediaKey) => {
  return (
    socialMediaMetada[siteKey]?.cssClass || socialMediaMetada.Default.cssClass
  );
};

export const getSocialMediaIcon = (siteKey: SocialMediaKey) => {
  return (
    socialMediaMetada[siteKey]?.iconName || socialMediaMetada.Default.iconName
  );
};
