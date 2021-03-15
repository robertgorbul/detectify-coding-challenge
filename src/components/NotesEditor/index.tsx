import { SyntheticEvent, useCallback, useEffect, useState } from 'react';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

import { ActionButton } from '~components/ActionButton';
import { Icon } from '~components/Icon';
import { List } from '~components/List';
import { ListItem } from '~components/ListItem';
import { Note } from '~components/Note';
import { SearchBar } from '~components/SearchBar';
import { CategoriesToolbar } from '~components/CategoriesToolbar';

import { NoteCategory, NoteItem, useNotes } from '~hooks/useNotes';
import { updateCategories } from '~/src/utils';
import { config } from '~config';
import { IconPath } from '~/src/assets/icons';

import { TabIndexes } from '~types';

export const NotesEditor: React.FC = () => {
  const [items, setItems] = useNotes();
  const [selectedItem, setSelectedItem] = useState<NoteItem>();
  const [activeItems, setActiveItems] = useState<NoteItem[]>([]);
  const [activeCategories, setActiveCategories] = useState<NoteCategory[]>([]);
  const [isNewItemCreated, setIsNewItemCreated] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const handleCreate = useCallback(() => {
    const item = {
      id: uuidv4(),
      title: 'Start typing...',
      content: '',
    };
    setItems([item, ...items]);
    setIsNewItemCreated(true);
  }, [items]);

  const handleChange = useCallback(
    (item: NoteItem) => {
      const filteredItems = items.filter(({ id }) => item.id !== id);

      setSelectedItem(item);
      return setItems([item, ...filteredItems]);
    },
    [items]
  );

  const handleDelete = useCallback(
    (e: SyntheticEvent<HTMLButtonElement>, id: string) => {
      e.stopPropagation();
      setSelectedItem(undefined);
      setItems(items.filter((item) => item.id !== id));
    },
    [items]
  );

  const onSelectedFromSearch = useCallback(
    (item: NoteItem) => {
      setIsSearchOpen(false);
      setSelectedItem(item);
    },
    [items]
  );

  useEffect(() => {
    if (isNewItemCreated) {
      setSelectedItem(items[0]);
      setIsNewItemCreated(false);
    }
  }, [isNewItemCreated]);

  useEffect(() => {
    if (activeCategories.length) {
      setActiveItems(
        items.filter(({ categories }) =>
          activeCategories.some((category) => categories?.includes(category))
        )
      );
    } else {
      setActiveItems(items);
    }
  }, [items, activeCategories]);

  return (
    <section className="w-full max-w-text my-40">
      <AnimateSharedLayout type="crossfade">
        <div className="flex items-center">
          <ActionButton
            className="ml-4 bg-opacity-60 hover:bg-opacity-80 shadow-md hover:shadow-lg"
            color="bg-orange text-light"
            icon={IconPath.SEARCH}
            tabIndex={TabIndexes.HIGH}
            onClick={() => setIsSearchOpen(true)}
            aria-label="Create new note"
          />
          <ActionButton
            className="ml-auto mr-4 bg-opacity-60 hover:bg-opacity-80 shadow-md hover:shadow-lg"
            color="bg-blue"
            icon={IconPath.PLUS}
            tabIndex={TabIndexes.HIGH}
            onClick={handleCreate}
            aria-label="Create new note"
          />
        </div>
        {!!items?.length && (
          <motion.div
            className="flex justify-start items-center mx-4 py-2"
            initial="initial"
            animate="animate"
            variants={config.animation}
          >
            <Icon icon={IconPath.FILTER} />:
            <CategoriesToolbar
              activeCategories={activeCategories}
              handleChange={(category) =>
                setActiveCategories(
                  updateCategories({ categories: activeCategories, category })
                )
              }
            />
            {!!activeCategories?.length && (
              <ActionButton
                className="ml-4"
                icon={IconPath.TRASH}
                onClick={() => setActiveCategories([])}
              />
            )}
          </motion.div>
        )}
        {!!activeItems?.length && (
          <List
            className="p-4"
            initial="initial"
            animate="animate"
            variants={config.animation}
            transition={{ delay: 0.05 }}
          >
            {activeItems.map((item: NoteItem) => (
              <ListItem
                key={item.id}
                onClick={() => setSelectedItem(item)}
                handleDelete={(e) => handleDelete(e, item.id)}
                layoutId={`note_${item.id}`}
                tabIndex={TabIndexes.HIGH}
              >
                {item.title}
              </ListItem>
            ))}
          </List>
        )}
        {!activeItems?.length && !!activeCategories?.length && (
          <motion.div
            className="w-full flex px-4 py-8"
            initial="initial"
            animate="animate"
            variants={config.animation}
          >
            There aren't any notes in selected categories
          </motion.div>
        )}
        {!items?.length && (
          <motion.div
            className="w-full flex px-4 py-8"
            initial="initial"
            animate="animate"
            variants={config.animation}
          >
            Hi there! There are notes yet to be created.
            <br />
            Start by pressing "+".
          </motion.div>
        )}
        <AnimatePresence>
          {selectedItem?.id && (
            <Note
              layoutId={`note_${selectedItem.id}`}
              item={selectedItem}
              handleClose={() => setSelectedItem(undefined)}
              handleChange={handleChange}
              handleDelete={handleDelete}
            />
          )}
          {isSearchOpen && (
            <SearchBar
              items={items}
              handleClose={() => setIsSearchOpen(false)}
              handleSelect={onSelectedFromSearch}
            />
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </section>
  );
};
