import { FC } from 'react';
import { Icon, IIcon } from "@/shared/assets/icons/Custom";

import MinusSvg from '@/shared/assets/icons/svg/outline/outline_minus.svg';

export const MinusIcon: FC<IIcon> = ({ className, alt }) => {
  return <Icon icon={MinusSvg} className={className} alt={alt} />;
};
