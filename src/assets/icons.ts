export enum IconPath {
  X = 'x',
  SEARCH = 'search',
  TRASH = 'trash',
  PENCIL = 'pencil',
}

export const iconsPaths = {
  [IconPath.X]: 'M6 18L18 6M6 6l12 12',
  [IconPath.SEARCH]: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
  [IconPath.TRASH]:
    'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16',
  [IconPath.PENCIL]:
    'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z',
};
