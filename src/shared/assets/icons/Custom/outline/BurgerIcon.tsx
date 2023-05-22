import { FC } from 'react';
import { Icon, IIcon } from "@/shared/assets/icons/Custom";

import BurgerSvg from '@/shared/assets/icons/svg/outline/outline_burger.svg';

export const BurgerIcon: FC<IIcon> = ({ className, alt }) => {
  return <Icon icon={BurgerSvg} className={className} alt={alt} />;
};
