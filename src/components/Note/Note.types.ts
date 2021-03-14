import { HTMLMotionProps } from 'framer-motion';
import { HTMLAttributes } from 'react';

export type NoteItem = {
  id: string;
  title: string;
  content: string;
};

export type NoteProps = HTMLAttributes<HTMLDivElement> &
  HTMLMotionProps<'div'> & {
    item: NoteItem;
    onClose: () => void;
    handleChange: (item: NoteItem) => void;
  };
