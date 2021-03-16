import { motion } from 'framer-motion';
import classNames from 'classnames';

import { Icon } from '~components/Icon';

import { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = ({
  className,
  type,
  icon,
  children,
  onClick,
  ...props
}) => {
  const classes = classNames('cursor-pointer', className);

  return (
    <motion.button className={classes} onClick={onClick} {...props}>
      {icon && <Icon icon={icon} />}
      {children}
    </motion.button>
  );
};
