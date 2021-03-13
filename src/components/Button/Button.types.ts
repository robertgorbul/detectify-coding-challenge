import { IconPath } from '~/src/assets/icons';
import { SyntheticEvent } from 'react';

export type ButtonProps = {
  className?: string;
  icon?: IconPath;
  onClick?: (e: SyntheticEvent<HTMLButtonElement>) => void;
};
