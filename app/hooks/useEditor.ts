import { useMutation, useQueryClient } from 'react-query';
import { deleteEntry, createEntry, updateEntry } from '@shared/api';
import type { Entry } from '@shared/types';

const useEditor = () => {
  const queryClient = useQueryClient();

  const { mutate: onCreate } = useMutation(createEntry, {
    onSuccess: (createdEntry: Entry) => {
      queryClient.setQueryData<Entry[] | undefined>('entries', (entries) => {
        if (!entries) return;
        const updatedEntries = [createdEntry, ...entries];
        return updatedEntries;
      });
    },
  });

  const { mutate: onDelete } = useMutation(deleteEntry, {
    onSuccess: (_, deletedEntryID) => {
      queryClient.setQueryData<Entry[] | undefined>('entries', (entries) => {
        if (!entries) return [];
        const filteredEntries = entries.filter((e) => e.id !== deletedEntryID);
        return filteredEntries;
      });
    },
  });

  const { mutate: onUpdate } = useMutation(updateEntry, {
    onSuccess: (updatedEntry) => {
      queryClient.setQueryData<Entry[] | undefined>('entries', (entries) => {
        if (!entries) return [];
        const foundIndex = entries.findIndex((x) => x.id == updatedEntry.id);
        entries[foundIndex] = updatedEntry;
        return entries;
      });
    },
  });

  return { onUpdate, onCreate, onDelete };
};

export default useEditor;
