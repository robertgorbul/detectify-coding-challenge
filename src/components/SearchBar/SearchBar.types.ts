import { HTMLAttributes } from 'react';
import { HTMLMotionProps } from 'framer-motion';

import { NoteItem } from '~components/Note/Note.types';

export type SearchBarProps = HTMLAttributes<HTMLDivElement> &
  HTMLMotionProps<'div'> & {
    items: NoteItem[];
    handleClose: () => void;
    handleSelect: (item: NoteItem) => void;
  };
