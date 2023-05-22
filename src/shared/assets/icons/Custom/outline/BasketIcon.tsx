import { FC } from 'react';
import { Icon, IIcon } from "@/shared/assets/icons/Custom";

import BasketSvg from '@/shared/assets/icons/svg/outline/outline_basket.svg';

export const BasketIcon: FC<IIcon> = ({ className, alt }) => {
  return <Icon icon={BasketSvg} className={className} alt={alt} />;
};
