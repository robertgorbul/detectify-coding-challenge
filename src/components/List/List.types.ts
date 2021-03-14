import { HTMLAttributes } from 'react';
import { HTMLMotionProps } from 'framer-motion';

export type ListProps = HTMLAttributes<HTMLUListElement> &
  HTMLMotionProps<'ul'>;
