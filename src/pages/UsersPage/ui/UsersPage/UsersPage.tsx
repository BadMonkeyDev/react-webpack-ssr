import {
  useState,
} from 'react';
import { CameraIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/solid';
import { useUserData } from '@/entities/User';
import { AppLoader } from '@/shared/ui/AppLoader';
import { AppRoutes } from '@/shared/config/routeConfig';
import { AppLink } from '@/shared/ui/AppLink';
import { DividerLine } from '@/shared/ui/DividerLine';
import { SelectOption } from '@/shared/ui/Select';
import { UsersFilter } from '../UsersFilter';
import { useSortedAndFilteredUsers } from '../../lib/useSortedAndFilteredUsers';
import { Sort } from '../../types/sort';

const UsersPage = () => {
  const defaultOption: SelectOption = { title: 'Сортування', value: '', disabled: true };

  const [selectedOption, setSelectedOption] = useState<SelectOption>(defaultOption);
  const [filterValue, setFilterValue] = useState<string>('');

  const { isLoading, data, isError } = useUserData();

  const filteredAndSortedUsers = useSortedAndFilteredUsers(data, selectedOption.value as Sort, filterValue);

  if (isLoading) {
    return <AppLoader />;
  }

  if (isError) {
    return <h1>Помилка при отриманні користувачів!</h1>;
  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-3xl mb-3">Користувачі</h1>
        <UsersFilter
          className="flex gap-2"
          filterValue={filterValue}
          setFilterValue={setFilterValue}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          defaultOption={defaultOption}
        />
      </div>
      {
        filteredAndSortedUsers.length > 0 ? (
          <div className="mt-8 flex flex-col rounded p-2 xl:p-8 border-2 border-solid border-gray-500">
            {filteredAndSortedUsers.map((user, index) => (
              <div key={user.id}>
                {index !== 0 && <DividerLine />}
                <div
                  key={user.id}
                  className="flex gap-4 shrink justify-between items-center p-4"
                >
                  <div className="text-lg flex-1 flex shrink gap-2">
                    <span className="flex-1">{user.username}</span>
                  </div>
                  <div className="flex gap-4">
                    <AppLink href={`${AppRoutes.USERS}/${user.id}/posts`} className="flex gap-2 items-center">
                      <ClipboardDocumentListIcon className="w-6 h-6" />
                      <span>Статті</span>
                    </AppLink>
                    <AppLink color="yellow" href={`${AppRoutes.USERS}/${user.id}/albums`} className="flex gap-2 items-center">
                      <CameraIcon className="w-6 h-6" />
                      <span>Альбоми</span>
                    </AppLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h2 className="text-3xl">
            Користувачі не знайдені!
          </h2>
        )
      }
    </div>

  );
};
export default UsersPage;
