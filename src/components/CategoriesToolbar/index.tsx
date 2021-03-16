import { motion } from 'framer-motion';
import classNames from 'classnames';

import { CategoryToggle } from '~components/CategoryToggle';

import { NoteCategory } from '~hooks/useNotes';
import { CategoriesToolbarProps } from './CategoriesToolbar.types';
import { config } from '~config';

export const CategoriesToolbar: React.FC<CategoriesToolbarProps> = ({
  className,
  activeCategories = [],
  handleChange,
  ...props
}) => {
  const classes = classNames(
    'flex justify-start items-center text-light',
    className
  );
  const categories = Object.values(NoteCategory);

  return (
    <motion.div className={classes} {...props}>
      {categories.map((category) => (
        <CategoryToggle
          key={category}
          isActive={activeCategories.includes(category)}
          color={config.notes.categories[category].color}
          icon={config.notes.categories[category].icon}
          category={category}
          handleClick={() => handleChange(category)}
        />
      ))}
    </motion.div>
  );
};
