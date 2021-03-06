import { ChangeEvent, useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';

import { Button } from '~components/Button';
import { Icon } from '~components/Icon';
import { List } from '~components/List';
import { ListItem } from '~components/ListItem';
import { IconPath } from '~/src/assets/icons';

import { NoteItem } from '~hooks/useNotes';
import { TabIndexes } from '~types';
import { SearchBarProps } from './SearchBar.types';

export const SearchBar: React.FC<SearchBarProps> = ({
  className,
  items,
  handleClose,
  handleSelect,
  ...props
}) => {
  const [keyword, setKeyword] = useState<string>('');
  const [filteredItems, setFilteredItems] = useState<NoteItem[]>([]);

  const overlayRef = useRef(null);

  const classes = classNames(
    'flex flex-col items-stretch justify-stretch',
    'w-full max-w-text min-h-search text-dark dark:text-light overflow-hidden',
    'm-4 md:mt-20',
    'border-2 border-solid border-light dark:border-base1 rounded-2xl',
    'shadow-lg',
    'bg-light dark:bg-base1',
    className
  );

  const variants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0.75 },
    exit: { opacity: 0 },
  };

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (!e?.target?.value) {
        setKeyword('');
        return setFilteredItems([]);
      }

      setKeyword(e.target.value);
      return setFilteredItems(
        items.filter(
          (item) =>
            item?.content
              .toLowerCase()
              .includes(e.target.value.toLowerCase()) ||
            item?.title.toLowerCase().includes(e.target.value.toLowerCase())
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
  }, [overlayRef, handleClose]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 flex justify-center items-start"
    >
      <motion.div
        className={classes}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants}
        {...props}
      >
        <div className="flex justify-between items-center flex-none">
          <label
            className="flex-auto flex items-center m-2 mr-0"
            htmlFor="searchBar"
          >
            <Icon className="my-auto" icon={IconPath.SEARCH} />
            <input
              id="searchBar"
              className="flex-auto text-xl mx-2 border-0 border-b-4 border-violet bg-transparent focus:outline-black"
              type="text"
              name="search"
              onChange={onChange}
            />
          </label>
          <Button
            className="m-2"
            action
            icon={IconPath.X}
            tabIndex={TabIndexes.HIGH}
            onClick={handleClose}
            aria-label="Close note editor"
          />
        </div>
        <div className="flex items-start max-h-1/2screen overflow-y-auto flex-auto">
          {!!filteredItems?.length && (
            <List
              className="p-4 flex-none"
              transition={{ staggerChildren: 0.07, delayChildren: 0.2 }}
            >
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
          )}
          {!!keyword && !filteredItems?.length && (
            <div className="flex justify-center items-center m-auto">
              No results available :(
            </div>
          )}
          {!keyword && !filteredItems?.length && (
            <div className="flex justify-center items-center m-auto">
              Please enter something :)
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
