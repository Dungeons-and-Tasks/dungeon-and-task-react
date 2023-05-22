import { FC } from 'react';
import { Icon, IIconGroup } from '@/client';

import TelegramSvg from '@/shared/assets/icons/svg/category/social/social_telegram.svg';
import DiscordSvg from '@/shared/assets/icons/svg/category/social/social_discord.svg';
import TwitterSvg from '@/shared/assets/icons/svg/category/social/social_twitter.svg';
import VkSvg from '@/shared/assets/icons/svg/category/social/social_vk.svg';
import YoutubeSvg from '@/shared/assets/icons/svg/category/social/social_youtube.svg';
import InstagramSvg from '@/shared/assets/icons/svg/category/social/social_instagram.svg';

export type TSocialIcon = 'telegram' | 'discord' | 'twitter' | 'vk' | 'youtube' | 'instagram';

const iconSrc = {
  telegram: TelegramSvg,
  discord: DiscordSvg,
  twitter: TwitterSvg,
  vk: VkSvg,
  youtube: YoutubeSvg,
  instagram: InstagramSvg,
};

export const SocialIcon: FC<IIconGroup<TSocialIcon>> = ({ icon, className, alt }) => {
  return <Icon icon={iconSrc[icon]} className={className} alt={alt} />;
};
