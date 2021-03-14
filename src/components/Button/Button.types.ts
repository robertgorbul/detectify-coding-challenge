import { IconPath } from '~/src/assets/icons';
import { ButtonHTMLAttributes } from 'react';
import { HTMLMotionProps } from 'framer-motion';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  HTMLMotionProps<'button'> & {
    icon?: IconPath;
  };
