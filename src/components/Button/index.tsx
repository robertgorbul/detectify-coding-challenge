import { motion } from 'framer-motion';
import classNames from 'classnames';

import { Icon } from '~components/Icon';

import { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = ({
  className,
  type,
  icon,
  color,
  action = false,
  children,
  onClick,
  ...props
}) => {
  const classes = classNames(
    'cursor-pointer',
    'flex justify-center items-center',
    'text-current transition-colors',
    'shadow hover:shadow-md',
    'focus:outline-none focus:ring',
    { 'rounded-full border-0 p-2': action },
    { 'bg-magenta bg-opacity-40 hover:bg-opacity-60': !color },
    color,
    className
  );

  return (
    <motion.button className={classes} onClick={onClick} {...props}>
      {icon && <Icon icon={icon} />}
      {!action && children}
    </motion.button>
  );
};
