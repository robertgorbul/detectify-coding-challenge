import { useState, useEffect, SyntheticEvent } from 'react';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

import { ActionButton } from '~components/ActionButton';
import { List } from '~components/List';
import { ListItem } from '~components/ListItem';
import { Note } from '~components/Note';

import { notes } from '~/src/assets/data';
import { IconPath } from '~/src/assets/icons';

import { TabIndexes } from '~types';
import { NoteItem } from '~components/Note/Note.types';

export const NotesEditor: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<NoteItem>();
  const [items, setItems] = useState<NoteItem[]>(notes);
  const [isNewItemCreated, setIsNewItemCreated] = useState<boolean>(false);

  const handleCreate = () => {
    const item = {
      id: uuidv4(),
      title: 'Start typing...',
      content: '',
    };
    setItems([item, ...items]);
    setIsNewItemCreated(true);
  };

  const handleChange = (item: NoteItem) => {
    const filteredItems = items.filter(({ id }) => item.id !== id);

    setSelectedItem(item);
    return setItems([item, ...filteredItems]);
  };

  const handleDelete = (e: SyntheticEvent<HTMLButtonElement>, id: string) => {
    e.stopPropagation();
    setItems(items.filter((item) => item.id !== id));
  };

  useEffect(() => {
    if (isNewItemCreated) {
      setSelectedItem(items[0]);
      setIsNewItemCreated(false);
    }
  }, [isNewItemCreated]);

  return (
    <div className="w-full max-w-text my-40">
      <AnimateSharedLayout type="crossfade">
        <ActionButton
          className="ml-4 bg-opacity-60 hover:bg-opacity-80 shadow-md hover:shadow-lg"
          color="bg-blue"
          icon={IconPath.PLUS}
          tabIndex={TabIndexes.HIGH}
          onClick={handleCreate}
          aria-label="Create new note"
        />
        <List>
          {items.map((item: NoteItem) => (
            <ListItem
              key={item.id}
              onClick={() => setSelectedItem(item)}
              handleDelete={(e) => handleDelete(e, item.id)}
              layoutId={item.id}
              tabIndex={TabIndexes.HIGH}
            >
              {item.title}
            </ListItem>
          ))}
        </List>
        <AnimatePresence>
          {selectedItem?.id && (
            <Note
              layoutId={selectedItem.id}
              onClose={() => setSelectedItem(undefined)}
              item={selectedItem}
              handleChange={handleChange}
            />
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </div>
  );
};
