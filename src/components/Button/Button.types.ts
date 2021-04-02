import { ButtonHTMLAttributes } from 'react';
import { HTMLMotionProps } from 'framer-motion';
import { IconPath } from '~/src/assets/icons';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  HTMLMotionProps<'button'> & {
    icon?: IconPath;
    color?: string;
    action?: boolean;
  };
