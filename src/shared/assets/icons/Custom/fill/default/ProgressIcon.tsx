import { FC } from 'react';
import { Icon, IIcon } from "@/shared/assets/icons/Custom";

import ProgressSvg from '@/shared/assets/icons/svg/fill/fill_progress.svg';

export const ProgressIcon: FC<IIcon> = ({ className, alt }) => {
  return <Icon icon={ProgressSvg} className={className} alt={alt} />;
};
