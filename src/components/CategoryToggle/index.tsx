import classNames from 'classnames';

import { Button } from '~components/Button';

import { TabIndexes } from '~types';
import { CategoryToggleProps } from './CategoryToggle.types';

export const CategoryToggle: React.FC<CategoryToggleProps> = ({
  className,
  icon,
  color,
  category,
  isActive,
  handleClick,
  ...props
}) => {
  const categoryClasses = classNames(
    'm-2',
    {
      'bg-opacity-60': !isActive,
      'bg-opacity-100': isActive,
    },
    className
  );

  return (
    <Button
      className={categoryClasses}
      action
      color={isActive ? color : 'bg-base01'}
      icon={icon}
      tabIndex={TabIndexes.HIGH}
      onClick={handleClick}
      aria-label={`Toggle ${category} category`}
      {...props}
    />
  );
};
