import classNames from 'classnames';

import { Button } from '~components/Button';

import { ActionButtonProps } from './ActionButton.types';

export const ActionButton: React.FC<ActionButtonProps> = ({
  className,
  type,
  icon,
  color,
  children,
  onClick,
  ...props
}) => {
  const classes = classNames(
    'rounded-full text-current border-0 transition-colors',
    'bg-opacity-40 hover:bg-opacity-60',
    'p-1 m-2',
    'shadow hover:shadow-md',
    'focus:outline-none focus:ring',
    { 'bg-magenta': !color },
    color,
    className
  );

  return (
    <Button className={classes} icon={icon} onClick={onClick} {...props} />
  );
};
