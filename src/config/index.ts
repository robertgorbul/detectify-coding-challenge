export type NotesConfig = {
  maxNoteChars: number;
};

export type Config = {
  notes: NotesConfig;
};

export const config: Config = {
  notes: {
    maxNoteChars: 1120,
  },
};
