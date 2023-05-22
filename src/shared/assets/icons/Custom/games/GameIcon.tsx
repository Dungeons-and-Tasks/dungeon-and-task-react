import React, { FC } from 'react';

import { ReactComponent as Gta5Svg } from '@/shared/assets/icons/svg/games/game_gta5.svg';
import { ReactComponent as LineageSvg } from '@/shared/assets/icons/svg/games/game_lineage.svg';
import { ReactComponent as WowSvg } from '@/shared/assets/icons/svg/games/game_wow.svg';
import { ReactComponent as PokerSvg } from '@/shared/assets/icons/svg/games/game_poker.svg';
import { ReactComponent as CsgoSvg } from '@/shared/assets/icons/svg/games/game_csgo.svg';

export type IconName = 'gta5' | 'lineage' | 'wow' | 'poker' | 'csgo';

export interface IconProps {
  icon: IconName;
  className?: string;
}

const iconMap: Record<IconName, FC<React.SVGProps<SVGSVGElement>>> = {
  gta5: Gta5Svg,
  lineage: LineageSvg,
  wow: WowSvg,
  poker: PokerSvg,
  csgo: CsgoSvg,
};

export const GameIcon: FC<IconProps> = ({ icon, className  }) => {
  const Icon = iconMap[icon];
  return <Icon className={ className || 'maxw_30 minw_30' }/>;
};