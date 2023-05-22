import { FC } from 'react';
import { Icon, IIcon } from "@/shared/assets/icons/Custom";

import JoystickSvg from '@/shared/assets/icons/svg/fill/fill_joystick.svg';

export const JoystickIcon: FC<IIcon> = ({ className, alt }) => {
  return <Icon icon={JoystickSvg} className={className} alt={alt} />;
};
