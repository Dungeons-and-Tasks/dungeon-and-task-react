import { FC } from 'react';
import { Icon, IIcon } from "@/shared/assets/icons/Custom";

import GuildSvg from '@/shared/assets/icons/svg/fill/fill_guild.svg';

export const GuildIcon: FC<IIcon> = ({ className, alt }) => {
  return <Icon icon={GuildSvg} className={className} alt={alt} />;
};
