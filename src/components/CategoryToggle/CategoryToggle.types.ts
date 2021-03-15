import { NoteCategory } from '~hooks/useNotes';
import { IconPath } from '~/src/assets/icons';
import { ButtonProps } from '~components/Button/Button.types';

export type CategoryToggleProps = Omit<ButtonProps, 'children'> & {
  icon: IconPath;
  color: string;
  category: NoteCategory;
  isActive?: boolean;
  handleClick: () => void;
};
