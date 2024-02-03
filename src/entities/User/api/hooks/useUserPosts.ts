import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import { $api, ApiResponse } from '@/shared/api';
import { Post } from '@/entities/Post';

export function useUserPosts(userId: string) {
  const [userPosts, setUserPosts] = useState<ApiResponse<Post[] | null>>({
    data: null,
    isLoading: true,
    isError: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<Post[]> = await $api.get(`/users/${userId}/posts`);
        setUserPosts({
          data: response.data,
          isLoading: false,
          isError: false,
        });
      } catch (error) {
        setUserPosts({
          data: null,
          isLoading: false,
          isError: true,
        });
      }
    };

    fetchData();
  }, [userId]);

  return userPosts;
}
