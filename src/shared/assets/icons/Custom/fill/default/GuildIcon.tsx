import { FC } from 'react';

import GuildMemberSvg from '@/shared/assets/icons/svg/fill/fill_guild_true.svg';
import GuildNotMemberSvg from '@/shared/assets/icons/svg/fill/fill_guild_false.svg';
import { Icon, IIconGroup } from "@/shared/assets/icons/Custom";

export type TGuildIcon = 'member' | 'notMember';

const iconSrc = {
  member: GuildMemberSvg,
  notMember: GuildNotMemberSvg,
};

export const GuildIcon: FC<IIconGroup<TGuildIcon>> = ({ icon, className, alt }) => {
  return <Icon icon={iconSrc[icon]} className={className} alt={alt} />;
};
