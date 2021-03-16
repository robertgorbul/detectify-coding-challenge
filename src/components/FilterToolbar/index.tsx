import { motion } from 'framer-motion';
import classNames from 'classnames';

import { ActionButton } from '~components/ActionButton';
import { Icon } from '~components/Icon';
import { CategoriesToolbar } from '~components/CategoriesToolbar';

import { updateCategories } from '~/src/utils';
import { IconPath } from '~/src/assets/icons';

import { FilterToolbarProps } from './FilterToolbar.types';

export const FilterToolbar: React.FC<FilterToolbarProps> = ({
  className,
  activeCategories,
  handleChange,
  ...props
}) => {
  const classes = classNames('flex justify-start items-center', className);

  return (
    <motion.div className={classes} {...props}>
      <Icon icon={IconPath.FILTER} />:
      <CategoriesToolbar
        activeCategories={activeCategories}
        handleChange={(category) =>
          handleChange(
            updateCategories({ categories: activeCategories, category })
          )
        }
      />
      {!!activeCategories?.length && (
        <ActionButton
          className="ml-4"
          icon={IconPath.TRASH}
          onClick={() => handleChange([])}
        />
      )}
    </motion.div>
  );
};
