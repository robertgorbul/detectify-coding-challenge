import { HTMLAttributes } from 'react';
import { NoteCategory } from '~hooks/useNotes';

export type CategoriesToolbarProps = HTMLAttributes<HTMLDivElement> & {
  activeCategories?: NoteCategory[];
  handleChange: (category: NoteCategory) => void;
};
