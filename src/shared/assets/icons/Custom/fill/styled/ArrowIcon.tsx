import { FC } from 'react';

// import ArrowChangeSvg from '@/shared/assets/icons/svg/fill/fill_arrow_change.svg';
// import ArrowDownSvg from '@/shared/assets/icons/svg/fill/fill_arrow_down_recieve.svg';
import { Icon, IIconGroup } from "@/shared/assets/icons/Custom";

export type TArrowIcon = 'change' | 'down';

const iconSrc = {
  // change: ArrowChangeSvg,
  // down: ArrowDownSvg,
};

export const ArrowIcon: FC<IIconGroup<TArrowIcon>> = ({ icon, className, alt }) => {
  // return <Icon icon={iconSrc[icon]} className={className} alt={alt} />;
  return <></>
};
