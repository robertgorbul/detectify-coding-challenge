import { motion } from 'framer-motion';
import classNames from 'classnames/bind';

import { ListItemProps } from './ListItem.types';

import styles from './ListItem.module.css';
import { Button } from '~components/Button';
import { IconPath } from '~/src/assets/icons';

const cx = classNames.bind(styles);

export const ListItem: React.FC<ListItemProps> = ({
  className,
  children,
  onClick,
  handleDelete,
  ...props
}) => {
  const classes = cx(
    'flex-auto transition-colors cursor-pointer shadow-sm',
    'm-0 mt-4 px-4 py-2',
    'bg-base2 dark:bg-base02',
    'border-2 border-solid border-base1 rounded-2xl',
    'focus:outline-none focus:ring',
    'noteItem',
    className
  );

  return (
    <motion.li className={classes} tabIndex={0} onClick={onClick} {...props}>
      <motion.div className="flex justify-between items-center">
        {children}
        {handleDelete && (
          <Button
            className="rounded-full text-current bg-magenta bg-opacity-40 border-0 p-1 m-1 ml-auto shadow"
            icon={IconPath.TRASH}
            onClick={handleDelete}
          />
        )}
      </motion.div>
    </motion.li>
  );
};
