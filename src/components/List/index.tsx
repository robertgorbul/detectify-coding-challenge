import { motion } from 'framer-motion';
import classNames from 'classnames';

import { ListProps } from './List.types';

export const List: React.FC<ListProps> = ({ className, children }) => {
  const classes = classNames(
    'w-full flex flex-col justify-between items-stretch list-none',
    'm-0 p-4',
    className
  );
  return <motion.ul className={classes}>{children}</motion.ul>;
};
