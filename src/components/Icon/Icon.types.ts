import { SVGAttributes } from 'react';
import { IconPath } from '~/src/assets/icons';

export type IconProps = SVGAttributes<HTMLOrSVGElement> & {
  icon: IconPath;
  color?: string;
};
