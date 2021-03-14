import { HTMLMotionProps } from 'framer-motion';
import { HTMLAttributes, SyntheticEvent } from 'react';

export type NoteItem = {
  id: string;
  title: string;
  content: string;
};

export type NoteProps = HTMLAttributes<HTMLDivElement> &
  HTMLMotionProps<'div'> & {
    item: NoteItem;
    handleClose: () => void;
    handleChange: (item: NoteItem) => void;
    handleDelete: (e: SyntheticEvent<HTMLButtonElement>, id: string) => void;
  };
