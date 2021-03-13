import { motion } from 'framer-motion';
import classNames from 'classnames';

import { Icon } from '~components/Icon';

import { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = ({
  className,
  icon,
  children,
  onClick,
}) => {
  const classes = classNames(
    'flex justify-stretch items-center cursor-pointer',
    className
  );

  return (
    <motion.button className={classes} onClick={onClick}>
      {icon && <Icon icon={icon} />}
      {children}
    </motion.button>
  );
};
