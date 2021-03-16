import { SyntheticEvent } from 'react';
import { NoteItem } from '~hooks/useNotes';
import { ListProps } from '~components/List/List.types';

export type NotesListProps = ListProps & {
  items: NoteItem[];
  handleSelect: (item: NoteItem) => void;
  handleDelete: (e: SyntheticEvent<HTMLButtonElement>, id: string) => void;
};
