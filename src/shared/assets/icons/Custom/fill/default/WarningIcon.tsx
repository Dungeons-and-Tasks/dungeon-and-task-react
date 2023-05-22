import { FC } from 'react';
import { Icon, IIcon } from "@/shared/assets/icons/Custom";

import WarningSvg from '@/shared/assets/icons/svg/category/info/info_warning.svg';

export const WarningIcon: FC<IIcon> = ({ className, alt, style }) => {
  return <Icon icon={WarningSvg} className={className} alt={alt} style={style} />;
};
