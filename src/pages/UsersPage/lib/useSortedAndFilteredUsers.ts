import { useMemo } from 'react';
import { User } from '@/entities/User';
import { Sort } from '../types/sort';
import { useSortedUsers } from '@/pages/UsersPage/lib/useSortedUsers';

export const useSortedAndFilteredUsers = (users: User[] | null, sort: Sort, filterValue: string) => {
  const sortedUsers = useSortedUsers(users, sort);

  return useMemo(
    () => {
      if (sortedUsers.length > 0) {
        return sortedUsers.filter(({ username }) => username.toLowerCase().includes(filterValue.toLowerCase()));
      }

      return [];
    },
    [sortedUsers, filterValue],
  );
};
