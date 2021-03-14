import { useState, useEffect, useCallback, SyntheticEvent } from 'react';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

import { ActionButton } from '~components/ActionButton';
import { List } from '~components/List';
import { ListItem } from '~components/ListItem';
import { Note } from '~components/Note';
import { SearchBar } from '~components/SearchBar';

import { notes } from '~/src/assets/data';
import { IconPath } from '~/src/assets/icons';

import { TabIndexes } from '~types';
import { NoteItem } from '~components/Note/Note.types';

export const NotesEditor: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<NoteItem>();
  const [items, setItems] = useState<NoteItem[]>(notes);
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

  return (
    <section className="w-full max-w-text my-40">
      <AnimateSharedLayout type="crossfade">
        <div className="flex items-center">
          <ActionButton
            className="ml-4 bg-opacity-60 hover:bg-opacity-80 shadow-md hover:shadow-lg"
            color="bg-base00 dark:bg-base0 text-light"
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
        <List>
          {items.map((item: NoteItem) => (
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
