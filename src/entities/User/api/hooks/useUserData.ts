import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import { User } from '@/entities/User';
import { $api, ApiResponse, MetaParams } from '@/shared/api';

export function useUserData(params?: MetaParams) {
  const [userData, setUserData] = useState<ApiResponse<User[] | null>>({
    data: null,
    isLoading: true,
    isError: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<User[]> = await $api.get('/users', {
          params,
        });
        setUserData({
          data: response.data,
          isLoading: false,
          isError: false,
        });
      } catch (error) {
        setUserData({
          data: null,
          isLoading: false,
          isError: true,
        });
      }
    };

    fetchData();
  }, [params]);

  return userData;
}
