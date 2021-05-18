import type { Entry } from '@shared/types';

export const fakeEntry: Omit<Entry, 'id'> = {
  title: 'test',
  link: 'www.test.org',
  type: 'first',
  tags: '[]',
  position: 1000,
};
