import { HTMLAttributes } from 'react';
import { HTMLMotionProps } from 'framer-motion';
import { NoteCategory } from '~hooks/useNotes';

export type FilterToolbarProps = HTMLAttributes<HTMLDivElement> &
  HTMLMotionProps<'div'> & {
    activeCategories: NoteCategory[];
    handleChange: (categories: NoteCategory[]) => void;
  };
