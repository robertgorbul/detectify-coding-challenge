import { motion } from 'framer-motion';
import classNames from 'classnames/bind';

import { ActionButton } from '~components/ActionButton';
import { IconPath } from '~/src/assets/icons';

import styles from './ListItem.module.css';

import { ListItemProps } from './ListItem.types';

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
    <motion.li className={classes} onClick={onClick} {...props}>
      <motion.div className="flex justify-between items-center">
        {children}
        {handleDelete && (
          <ActionButton
            className="ml-auto"
            icon={IconPath.TRASH}
            onClick={handleDelete}
            aria-label="Delete note"
          />
        )}
      </motion.div>
    </motion.li>
  );
};
