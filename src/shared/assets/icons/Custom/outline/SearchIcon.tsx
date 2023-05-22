import { FC } from 'react';
import { Icon, IIcon } from "@/shared/assets/icons/Custom";

import SearchSvg from '@/shared/assets/icons/svg/outline/outline_search.svg';

export const SearchIcon: FC<IIcon> = ({ className, alt }) => {
  return <Icon icon={SearchSvg} className={className} alt={alt} />;
};
