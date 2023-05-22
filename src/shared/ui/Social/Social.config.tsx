import { ReactComponent as Discord } from "@/shared/assets/icons/svg/social/social_discord.svg";
import { ReactComponent as Twitter } from "@/shared/assets/icons/svg/social/social_twitter.svg";
import { ReactComponent as Telegram } from "@/shared/assets/icons/svg/social/social_telegram.svg";
import { ReactComponent as Youtube } from "@/shared/assets/icons/svg/social/social_youtube.svg";
import { ReactComponent as Instagram } from "@/shared/assets/icons/svg/social/social_instagram.svg";


export interface ISocial {
  title: string,
  icon: JSX.Element;
  desc?: string;
  href?: string;
}

export const EvoSocial: ISocial[] = [
  {
    title: 'Discord',
    icon: <Discord className='minw_25 maxw_25 h_100p'/>,
    href: 'https://discord.gg/yFrq7CTHME',
  },
  {
    title: 'Twitter',
    icon: <Twitter className='minw_25 maxw_25 h_100p'/>,
    href: 'https://twitter.com/evom_game',
  },
  {
    title: 'Telegram',
    icon: <Telegram className='minw_25 maxw_25 h_100p'/>,
    href: 'https://t.me/evom_game',
  },
  // {
  //   title: 'Vk',
  //   icon: <Vk className='minw_25 maxw_25 h_100p'/>,
  //   href: 'https://vk.com/evom_game',
  // },
  {
    title: 'Youtube',
    icon: <Youtube className='minw_25 maxw_25 h_100p'/>,
    href: 'https://www.youtube.com/@evom_game',
  },
  {
    title: 'Instagram',
    icon: <Instagram className='minw_25 maxw_25 h_100p'/>,
    href: 'https://instagram.com/evom.game',
  },
]