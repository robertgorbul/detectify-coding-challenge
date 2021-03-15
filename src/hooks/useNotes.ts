import { createLocalStorageStateHook } from 'use-local-storage-state';

export enum NoteCategory {
  PERSONAL = 'personal',
  SHOPPING = 'shopping',
  WORK = 'work',
}

export type NoteItem = {
  id: string;
  title: string;
  content: string;
  categories?: NoteCategory[];
};

export const useNotes = createLocalStorageStateHook<NoteItem[]>('notes', []);
