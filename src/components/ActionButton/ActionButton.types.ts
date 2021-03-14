import { ButtonProps } from '~components/Button/Button.types';
import { IconPath } from '~/src/assets/icons';

export type ActionButtonProps = Omit<ButtonProps, 'children'> & {
  icon: IconPath;
  color?: string;
};
