import { NoteCategory } from '~hooks/useNotes';
import { HTMLAttributes } from 'react';

export type CategoriesToolbarProps = HTMLAttributes<HTMLDivElement> & {
  activeCategories?: NoteCategory[];
  handleChange: (category: NoteCategory) => void;
};
