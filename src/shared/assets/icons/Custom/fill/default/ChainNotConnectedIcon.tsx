import { FC } from 'react';

import ChainNotConnectedSvg from '@/shared/assets/icons/svg/fill/fill_not-chain-connect.png';
import { IIcon } from "@/shared/assets/icons/Custom";

export const ChainNotConnectedIcon: FC<IIcon> = ({ className, alt }) => {
  return <img src={ChainNotConnectedSvg} className={className} alt={ alt } />;
};
