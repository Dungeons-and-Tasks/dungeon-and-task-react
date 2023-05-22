import { FC } from 'react';
import { Icon, IIcon } from "@/shared/assets/icons/Custom";

import DownloadSvg from '@/shared/assets/icons/svg/outline/outline_download.svg';

export const DownloadIcon: FC<IIcon> = ({ className, alt }) => {
  return <Icon icon={DownloadSvg} className={className} alt={alt} />;
};
