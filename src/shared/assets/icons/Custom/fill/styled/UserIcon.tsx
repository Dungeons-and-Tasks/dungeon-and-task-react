import { FC } from 'react';
import { IIconGroup } from "@/shared/assets/icons/Custom";

// import UserSvg from '@/shared/assets/icons/svg/fill/fill_user.svg';
// import UserInviteSvg from '@/shared/assets/icons/svg/fill/fill_user_invite.svg';

export type TUserIcon = 'user' | 'userInvite';

// const iconSrc = {
//   user: UserSvg,
//   userInvite: UserInviteSvg,
// };

export const UserIcon: FC<IIconGroup<TUserIcon>> = ({ icon, className, alt }) => {
  // return <Icon icon={iconSrc[icon]} className={className} alt={alt} />;
  return <></>;
  
};
