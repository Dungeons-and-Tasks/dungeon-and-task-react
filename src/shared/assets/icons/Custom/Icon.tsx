import React, { FC } from 'react';
import { IIcon } from "@/shared/assets/icons/Custom";


export interface IIconProps extends IIcon {
  icon: string;
  className?: string;
  alt?: string;
  style?: React.CSSProperties | undefined;
  id?: string;
}

export const Icon: FC<IIconProps> = ({ icon, className, alt, style, id }) => {
  
  // return <img src={icon} className={`icon ${className || ''}`} style={style} alt={alt} />;
  
  return (
    <object type='image/svg+xml' data={ icon } className={ `event_none user-select_none object_svg ${ className || '' }` } onClick={(e) => e.stopPropagation()}>
      <img src={icon} className={`icon ${className || ''}`} style={style} alt={alt} id={id} />;
    </object>
  );
};
