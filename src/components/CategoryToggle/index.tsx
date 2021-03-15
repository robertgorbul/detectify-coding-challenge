import classNames from 'classnames';

import { ActionButton } from '~components/ActionButton';

import { TabIndexes } from '~types';
import { CategoryToggleProps } from './CategoryToggle.types';

export const CategoryToggle: React.FC<CategoryToggleProps> = ({
  className,
  icon,
  color,
  category,
  isActive,
  handleClick,
}) => {
  const categoryClasses = classNames(
    {
      'bg-opacity-60': !isActive,
      'bg-opacity-100': isActive,
    },
    className
  );

  return (
    <ActionButton
      className={categoryClasses}
      color={isActive ? color : 'bg-base01'}
      icon={icon}
      tabIndex={TabIndexes.HIGH}
      onClick={handleClick}
      aria-label={`Toggle ${category} category`}
    />
  );
};
