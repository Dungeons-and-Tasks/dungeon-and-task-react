import { FC } from 'react';
import { Icon, IIcon } from "@/shared/assets/icons/Custom";

import PlusSvg from '@/shared/assets/icons/svg/outline/outline_plus.svg';

export const PlusIcon: FC<IIcon> = ({ className, alt }) => {
  return <Icon icon={PlusSvg} className={className} alt={alt} />;
};
