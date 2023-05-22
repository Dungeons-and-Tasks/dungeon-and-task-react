import { FC } from 'react';
import { Icon, IIcon } from "@/shared/assets/icons/Custom";

import CloseSvg from '@/shared/assets/icons/svg/outline/outline_close.svg';

export const CloseIcon: FC<IIcon> = ({ className, alt }) => {
  return <Icon icon={CloseSvg} className={className} alt={alt} />;
};
