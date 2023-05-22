import { FC } from 'react';
import { Icon, IIcon } from "@/shared/assets/icons/Custom";

import EvoCoinSvg from '@/shared/assets/icons/svg/category/logo/logo_evo.svg';
import EvoCoinSvg2 from '@/shared/assets/icons/svg/category/logo/logo_evo_coin_2x.png';
import EvoCoinSvg3 from '@/shared/assets/icons/svg/category/logo/logo_evo_coin_3x.png';
import EvoCoinSvg4 from '@/shared/assets/icons/svg/category/logo/logo_evo_coin_4x.png';

export const EvoCoinIcon: FC<IIcon> = ({ className, alt, style }) => {
  // return <Icon icon={EvoCoinSvg} className={className} alt={alt} style={style} />;
  // return (
  //   <object type='image/svg+xml' data={ EvoCoinSvg } className={ className } style={ style }
  //           onClick={ (e) => e.stopPropagation() }>
  //     {/*<img src={ EvoCoinSvg } className={ className } style={ style } alt={ alt } />*/}
  //   </object>
  // );
  return (
    <picture className='fit-content'>
      <source media='()' srcSet={ EvoCoinSvg2 + ' 1x, ' + EvoCoinSvg3 + ' 2x' } type='image/png' />
      <source media='(max-width: 640px)' srcSet={ EvoCoinSvg3 + ' 1x, ' + EvoCoinSvg4 + ' 2x' } type='image/png' />
      
      <img src={ EvoCoinSvg } srcSet={ EvoCoinSvg + ' 1x, ' + EvoCoinSvg2 + ' 2x' } alt={ alt }
           className={ 'user-select_none ' + className } style={style}/>
    </picture>
  );
};