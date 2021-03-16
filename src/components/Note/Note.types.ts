import { HTMLMotionProps } from 'framer-motion';
import { HTMLAttributes, SyntheticEvent } from 'react';

import { NoteItem } from '~hooks/useNotes';

export type NoteProps = HTMLAttributes<HTMLDivElement> &
  HTMLMotionProps<'div'> & {
    item: NoteItem;
    handleClose: () => void;
    handleChange: (item: NoteItem) => void;
    handleDelete: (
      e: SyntheticEvent<HTMLButtonElement>,
      id: string,
      permanent?: boolean
    ) => void;
  };
