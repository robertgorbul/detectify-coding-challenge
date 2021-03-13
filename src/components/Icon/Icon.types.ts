import { SVGAttributes } from 'react';
import { IconPath } from '~/src/assets/icons';

export type IconProps = SVGAttributes<any> & {
  icon: IconPath;
  color?: string;
};
