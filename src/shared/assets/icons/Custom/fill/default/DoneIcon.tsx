import { FC } from 'react';

import DoneSvg from '@/shared/assets/icons/svg/fill/fill_done.svg';
import { Icon, IIcon } from "@/shared/assets/icons/Custom";

export const DoneIcon: FC<IIcon> = ({ className, alt, style }) => {
  return <Icon icon={DoneSvg} className={className} alt={alt} style={style} />;
};
