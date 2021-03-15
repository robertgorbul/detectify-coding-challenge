import { NoteCategory } from '~hooks/useNotes';

export type UpdateCategoriesProps = {
  categories?: NoteCategory[];
  category: NoteCategory;
};
export const updateCategories = ({
  categories = [],
  category,
}: UpdateCategoriesProps): NoteCategory[] => {
  if (categories.indexOf(category) !== -1)
    return categories.filter((item) => item !== category);

  return [...categories, category];
};
