import classNames from 'classnames';

import { List } from '~components/List';
import { ListItem } from '~components/ListItem';

import { config } from '~config';
import { NoteItem } from '~hooks/useNotes';
import { TabIndexes } from '~types';
import { NotesListProps } from './NotesList.types';

export const NotesList: React.FC<NotesListProps> = ({
  className,
  items,
  handleSelect,
  handleDelete,
  ...props
}) => {
  const classes = classNames(className);

  return (
    <List
      className={classes}
      initial="initial"
      animate="animate"
      exit="initial"
      variants={config.animation}
      {...props}
    >
      {items.map((item: NoteItem) => (
        <ListItem
          key={item.id}
          className="font-medium"
          onClick={() => handleSelect(item)}
          handleDelete={(e) => handleDelete(e, item.id)}
          layoutId={`note_${item.id}`}
          tabIndex={TabIndexes.HIGH}
        >
          {item.title}
        </ListItem>
      ))}
    </List>
  );
};
