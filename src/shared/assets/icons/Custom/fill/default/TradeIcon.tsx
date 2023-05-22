import { FC } from 'react';
import { Icon, IIcon } from "@/shared/assets/icons/Custom";

import TradeSvg from '@/shared/assets/icons/svg/fill/fill_trade.svg';

export const TradeIcon: FC<IIcon> = ({ className, alt }) => {
  return <Icon icon={TradeSvg} className={className} alt={alt} />;
};
