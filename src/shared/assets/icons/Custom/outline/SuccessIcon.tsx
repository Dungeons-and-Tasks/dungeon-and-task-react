import { FC } from 'react';
import { Icon, IIconGroup } from '@/client';

import SuccessSvg from '@/shared/assets/icons/svg/outline/outline_success.svg';
import SuccessGradientSvg from '@/shared/assets/icons/svg/outline/outline_success_gradient.svg';

export type TSuccessIcon = 'success' | 'successGradient';

const iconSrc = {
  success: SuccessSvg,
  successGradient: SuccessGradientSvg,
};

export const SuccessIcon: FC<IIconGroup<TSuccessIcon>> = ({ icon, className, alt }) => {
  return <Icon icon={iconSrc[icon]} className={className} alt={alt} />;
};
