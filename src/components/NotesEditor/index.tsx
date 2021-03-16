import { SyntheticEvent, useCallback, useEffect, useState } from 'react';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

import { ActionButton } from '~components/ActionButton';
import { Note } from '~components/Note';
import { NotesList } from '~components/NotesList';
import { SearchBar } from '~components/SearchBar';

import { NoteItem, useNotes } from '~hooks/useNotes';
import { IconPath } from '~/src/assets/icons';

import { TabIndexes } from '~types';

export const NotesEditor: React.FC = () => {
  const [items, setItems] = useNotes();
  const [selectedItem, setSelectedItem] = useState<NoteItem>();
  const [isNewItemCreated, setIsNewItemCreated] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const handleCreate = useCallback(() => {
    const item = {
      id: uuidv4(),
      title: 'Start typing...',
      content: '',
      categories: [],
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
        <div className="px-4 py-8">
          <NotesList
            items={items}
            handleSelect={(item) => setSelectedItem(item)}
            handleDelete={(e, id) => handleDelete(e, id)}
          />
        </div>
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
