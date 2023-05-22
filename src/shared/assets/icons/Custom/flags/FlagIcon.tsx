import { FC } from 'react';
import { Icon, IIconGroup } from '@/client';

import EnSvg from '@/shared/assets/icons/svg/category/flags/flag_en.svg';
import RuSvg from '@/shared/assets/icons/svg/category/flags/flag_ru.svg';

export type TFlagIcon = 'en' | 'ru';

const iconSrc = {
  en: EnSvg,
  ru: RuSvg,
};

export const FlagIcon: FC<IIconGroup<TFlagIcon>> = ({ icon, className, alt }) => {
  return <Icon icon={iconSrc[icon]} className={className} alt={alt} />;
};
