import { ChangeEvent, useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';

import { ActionButton } from '~components/ActionButton';
import { Icon } from '~components/Icon';
import { List } from '~components/List';
import { ListItem } from '~components/ListItem';
import { IconPath } from '~/src/assets/icons';

import { NoteItem } from '~components/Note/Note.types';
import { SearchBarProps } from './SearchBar.types';
import { TabIndexes } from '~types';

export const SearchBar: React.FC<SearchBarProps> = ({
  className,
  items,
  handleClose,
  handleSelect,
  ...props
}) => {
  const [filteredItems, setFilteredItems] = useState<NoteItem[]>([]);

  const overlayRef = useRef(null);

  const classes = classNames(
    'w-full max-w-text min-h-search text-dark dark:text-light overflow-hidden',
    'm-4 md:mt-20',
    'border-2 border-solid border-light dark:border-base1 rounded-2xl',
    'shadow-lg',
    'bg-light dark:bg-base1',
    className
  );

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (!e.target.value) return setFilteredItems([]);

      return setFilteredItems(
        items.filter(
          (item) =>
            item.content.toLowerCase().includes(e.target.value.toLowerCase()) ||
            item.title.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    },
    [items]
  );

  useEffect(() => {
    function onClickOutside(event: MouseEvent) {
      if (overlayRef?.current === event.target) {
        handleClose();
      }
    }

    document.addEventListener('click', onClickOutside);

    return () => {
      document.removeEventListener('click', onClickOutside);
    };
  }, [overlayRef.current, handleClose]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 flex justify-center items-start"
    >
      <motion.div
        className={classes}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        {...props}
      >
        <div className="flex justify-between items-center">
          <div className="flex-auto flex items-center">
            <label className="p-1 m-1" htmlFor="searchBar">
              <Icon className="my-auto" icon={IconPath.SEARCH} />
            </label>
            <input
              id="searchBar"
              className="flex-auto text-xl mx-2 border-0 border-b-4 border-violet bg-transparent focus:outline-black"
              type="text"
              name="search"
              autoFocus
              onChange={onChange}
            />
          </div>
          <ActionButton
            icon={IconPath.X}
            tabIndex={TabIndexes.HIGH}
            onClick={handleClose}
            aria-label="Close note editor"
          />
        </div>
        <div className="max-h-1/2screen overflow-y-auto">
          <List transition={{ staggerChildren: 0.07, delayChildren: 0.2 }}>
            {filteredItems.map((item) => (
              <ListItem
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => handleSelect(item)}
                layoutId={`search_item_${item.id}`}
                tabIndex={TabIndexes.HIGH}
              >
                {item.title}
              </ListItem>
            ))}
          </List>
        </div>
      </motion.div>
    </div>
  );
};
