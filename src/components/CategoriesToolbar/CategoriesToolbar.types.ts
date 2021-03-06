import { HTMLAttributes } from 'react';
import { HTMLMotionProps } from 'framer-motion';
import { NoteCategory } from '~hooks/useNotes';

export type CategoriesToolbarProps = HTMLAttributes<HTMLDivElement> &
  HTMLMotionProps<'div'> & {
    activeCategories?: NoteCategory[];
    handleChange: (category: NoteCategory) => void;
  };
