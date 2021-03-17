import { AnimatePresence, motion } from 'framer-motion';
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

  const variants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        x: { stiffness: 1000, velocity: -100 },
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        x: { stiffness: 1000 },
      },
    },
  };

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
      <AnimatePresence>
        {!!activeCategories?.length && (
          <ActionButton
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
            className="ml-4"
            icon={IconPath.TRASH}
            onClick={() => handleChange([])}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};
