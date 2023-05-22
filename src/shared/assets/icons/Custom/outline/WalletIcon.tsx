import { FC } from 'react';
import { Icon, IIcon } from "@/shared/assets/icons/Custom";

import WalletSvg from '@/shared/assets/icons/svg/outline/outline_wallet.svg';

export const WalletIcon: FC<IIcon> = ({ className, alt }) => {
  return <Icon icon={WalletSvg} className={className} alt={alt} />;
};
