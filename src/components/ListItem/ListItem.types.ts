import { HTMLMotionProps } from 'framer-motion';
import { SyntheticEvent } from 'react';

export type ListItemProps = HTMLMotionProps<'li'> & {
  className?: string;
  onClick?: (e: SyntheticEvent<HTMLLIElement>) => void;
  handleDelete?: (e: SyntheticEvent<HTMLButtonElement>) => void;
};
