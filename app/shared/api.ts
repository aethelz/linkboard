import type { Entry } from '@shared/types';
import { fakeEntry } from '@shared/mocks';

export const getEntries = () =>
  fetch('http://localhost:3000/api/entries').then(
    (res) => res.json() as Promise<Entry[]>,
  );

export const deleteEntry = (id: number) =>
  fetch('http://localhost:3000/api/entry?id=' + id, { method: 'DELETE' });

export const createEntry = (entry: Omit<Entry, 'id'>) =>
  fetch('http://localhost:3000/api/entry', {
    body: JSON.stringify(fakeEntry),
    method: 'POST',
  }).then((res) => res.json() as Promise<Entry>);

export const updateEntry = (entry: Entry) =>
  fetch('http://localhost:3000/api/entry?id=' + entry.id, {
    body: JSON.stringify(entry),
    method: 'PATCH',
  }).then((res) => res.json() as Promise<Entry>);
