import { FC } from 'react';
import { Icon, IIcon } from "@/shared/assets/icons/Custom";

import TimeSvg from '@/shared/assets/icons/svg/outline/outline_time.svg';

export const TimeIcon: FC<IIcon> = ({ className, alt }) => {
  return <Icon icon={TimeSvg} className={className} alt={alt} />;
};
