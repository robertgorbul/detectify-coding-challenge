import classNames from 'classnames/bind';

import { Button } from '~components/Button';

import { ActionButtonProps } from './ActionButton.types';

import styles from './ActionButton.module.css';

const cx = classNames.bind(styles);

export const ActionButton: React.FC<ActionButtonProps> = ({
  className,
  type,
  icon,
  color,
  children,
  onClick,
  ...props
}) => {
  const classes = cx(
    'actionButton',
    'flex justify-center items-center',
    'rounded-full text-current border-0 transition-colors',
    'p-0 m-2',
    'shadow hover:shadow-md',
    'focus:outline-none focus:ring',
    { 'bg-magenta bg-opacity-40 hover:bg-opacity-60': !color },
    color,
    className
  );

  return (
    <Button className={classes} icon={icon} onClick={onClick} {...props} />
  );
};
