import { createLocalStorageStateHook } from 'use-local-storage-state';

export type NoteItem = {
  id: string;
  title: string;
  content: string;
};

export const useNotes = createLocalStorageStateHook<NoteItem[]>('notes', []);
