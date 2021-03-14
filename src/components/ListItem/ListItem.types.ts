import { HTMLMotionProps } from 'framer-motion';
import { LiHTMLAttributes, SyntheticEvent } from 'react';

export type ListItemProps = LiHTMLAttributes<HTMLLIElement> &
  HTMLMotionProps<'li'> & {
    handleDelete?: (e: SyntheticEvent<HTMLButtonElement>) => void;
  };
