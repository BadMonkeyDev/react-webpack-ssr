import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import { Album } from '@/entities/Album';
import { $api, ApiResponse } from '@/shared/api';

export function useUserAlbums(userId: string) {
  const [userAlbums, setUserAlbums] = useState<ApiResponse<Album[] | null>>({
    data: null,
    isLoading: true,
    isError: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<Album[]> = await $api.get(`/users/${userId}/albums`);
        setUserAlbums({
          data: response.data,
          isLoading: false,
          isError: false,
        });
      } catch (error) {
        setUserAlbums({
          data: null,
          isLoading: false,
          isError: true,
        });
      }
    };

    fetchData();
  }, [userId]);

  return userAlbums;
}
