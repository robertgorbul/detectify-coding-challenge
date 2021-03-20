import {
  SyntheticEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

import { ActionButton } from '~components/ActionButton';
import { Note } from '~components/Note';
import { NotesList } from '~components/NotesList';
import { SearchBar } from '~components/SearchBar';
import { FilterToolbar } from '~components/FilterToolbar';

import { NoteCategory, NoteItem, useNotes } from '~hooks/useNotes';
import { IconPath } from '~/src/assets/icons';
import { config } from '~config';
import { TabIndexes } from '~types';

export const NotesEditor: React.FC = () => {
  const [items, setItems] = useNotes();
  const [selectedItem, setSelectedItem] = useState<NoteItem>();
  const [activeItemId, setActiveItemId] = useState<string>('');
  const [itemsToDelete, setItemsToDelete] = useState<string[]>([]);
  const [activeCategories, setActiveCategories] = useState<NoteCategory[]>([]);
  const [isItemsToDelete, setIsItemsToDelete] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const handleCreate = useCallback(() => {
    const item = {
      id: uuidv4(),
      title: 'Start typing...',
      content: '',
      categories: [],
    };

    setActiveCategories([]);
    setItems([item, ...items]);
    setActiveItemId(item?.id);
  }, [items]);

  const handleChange = useCallback(
    (item: NoteItem) => {
      const filteredItems = items.filter(({ id }) => item.id !== id);

      setSelectedItem(item);
      return setItems([item, ...filteredItems]);
    },
    [items]
  );

  const handleSelect = (item: NoteItem) => {
    setActiveCategories([]);
    setActiveItemId(item?.id);
  };

  const handleDelete = (
    e: SyntheticEvent<HTMLButtonElement>,
    id: string,
    permanent?: boolean
  ) => {
    e.stopPropagation();
    setSelectedItem(undefined);
    setActiveItemId('');
    setItemsToDelete((prevState) => [...prevState, id]);
    if (permanent) setIsItemsToDelete(true);
  };

  const onSelectedFromSearch = (item: NoteItem) => {
    setIsSearchOpen(false);
    setActiveCategories([]);
    setActiveItemId(item?.id);
  };

  const activeItems = useMemo<NoteItem[]>(() => {
    if (activeCategories.length)
      return items.filter(({ categories }) =>
        activeCategories.some((category) => categories?.includes(category))
      );

    return items;
  }, [items, activeCategories]);

  useEffect(() => {
    if (!items?.length) setActiveCategories([]);
  }, [items]);

  useEffect(() => {
    if (activeItemId) {
      setSelectedItem(items.find(({ id }) => id === activeItemId));
    } else {
      setSelectedItem(undefined);
    }
  }, [activeItemId]);

  useEffect(() => {
    if (isItemsToDelete) {
      setItems(items.filter((item) => !itemsToDelete.includes(item.id)));
      setItemsToDelete([]);
      setIsItemsToDelete(false);
    }
  }, [isItemsToDelete]);

  return (
    <section className="w-full max-w-text my-20 xxl:my-40">
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
        <div className="px-4 py-8">
          {items?.length ? (
            <>
              <FilterToolbar
                className="pb-8"
                activeCategories={activeCategories}
                handleChange={(categories) => setActiveCategories(categories)}
              />
              {activeItems?.length ? (
                <NotesList
                  items={activeItems}
                  handleSelect={handleSelect}
                  handleDelete={(e, id) => handleDelete(e, id, true)}
                />
              ) : (
                <motion.p
                  className="w-full flex font-medium"
                  initial="initial"
                  animate="animate"
                  variants={config.animation}
                >
                  There aren&apos;t any notes in selected categories
                </motion.p>
              )}
            </>
          ) : (
            <motion.p
              className="w-full flex font-medium"
              initial="initial"
              animate="animate"
              variants={config.animation}
            >
              Hi there! There are notes yet to be created.
              <br />
              Start by pressing + button.
            </motion.p>
          )}
        </div>
        <AnimatePresence onExitComplete={() => setIsItemsToDelete(true)}>
          {selectedItem && (
            <Note
              layoutId={`note_${selectedItem.id}`}
              item={selectedItem}
              handleClose={() => setActiveItemId('')}
              handleChange={handleChange}
              handleDelete={handleDelete}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
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
