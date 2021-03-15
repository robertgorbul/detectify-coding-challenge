import { NoteCategory } from '~hooks/useNotes';
import { IconPath } from '~/src/assets/icons';

export type NotesConfig = {
  maxNoteChars: number;
  categories: {
    [key: string]: {
      color: string;
      icon: IconPath;
    };
  };
};

export type Config = {
  notes: NotesConfig;
  animation: {
    initial: { [key: string]: string | number };
    animate: { [key: string]: string | number };
  };
};

export const config: Config = {
  notes: {
    maxNoteChars: 1120,
    categories: {
      [NoteCategory.PERSONAL]: {
        color: 'bg-blue',
        icon: IconPath.USER,
      },
      [NoteCategory.SHOPPING]: {
        color: 'bg-yellow',
        icon: IconPath.SHOPPINGCART,
      },
      [NoteCategory.WORK]: {
        color: 'bg-violet',
        icon: IconPath.BRIEFCASE,
      },
    },
  },
  animation: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  },
};
