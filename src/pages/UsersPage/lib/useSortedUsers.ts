import { useMemo } from 'react';
import { User } from '@/entities/User';
import { Sort } from '../types/sort';

export const useSortedUsers = (users: User[] | null, sort: Sort) => useMemo(() => {
  if (users) {
    return [...users].sort((a, b) => (
      // eslint-disable-next-line no-nested-ternary
      sort === 'asc' ? a.username.localeCompare(b.username) : sort === 'desc' ? b.username.localeCompare(a.username) : 0));
  }
  return [];
}, [sort, users]);
