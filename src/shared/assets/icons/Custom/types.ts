import { CSSProperties } from 'react';

export interface IIcon {
  alt?: string;
  className?: string;
  style?: CSSProperties;
  id?: string,
}

export interface IIconGroup<T> extends IIcon {
  icon: T;
}
