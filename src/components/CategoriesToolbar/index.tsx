import classNames from 'classnames';

import { CategoryToggle } from '~components/CategoryToggle';

import { NoteCategory } from '~hooks/useNotes';
import { CategoriesToolbarProps } from './CategoriesToolbar.types';
import { config } from '~config';

export const CategoriesToolbar: React.FC<CategoriesToolbarProps> = ({
  className,
  activeCategories = [],
  handleChange,
}) => {
  const classes = classNames(
    'flex justify-start items-center text-light',
    className
  );
  const categories = Object.values(NoteCategory);

  return (
    <div className={classes}>
      {categories.map((category) => (
        <CategoryToggle
          isActive={activeCategories.includes(category)}
          color={config.notes.categories[category].color}
          icon={config.notes.categories[category].icon}
          category={category}
          handleClick={() => handleChange(category)}
        />
      ))}
    </div>
  );
};
