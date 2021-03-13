import { iconsPaths } from '~/src/assets/icons';

import { IconProps } from './Icon.types';

export const Icon: React.FC<IconProps> = ({
  icon,
  color = 'currentColor',
  width = 24,
  height = 24,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={width}
    height={height}
    stroke={color}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d={iconsPaths[icon]}
    />
  </svg>
);
