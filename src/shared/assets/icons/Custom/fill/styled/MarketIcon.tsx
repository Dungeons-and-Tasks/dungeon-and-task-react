import { FC } from 'react';
import { Icon, IIcon } from "@/shared/assets/icons/Custom";


import MarketSvg from '@/shared/assets/icons/svg/fill/fill_market.svg';

export const MarketIcon: FC<IIcon> = ({ className, alt }) => {
  return <Icon icon={MarketSvg} className={className} alt={alt} />;
};
