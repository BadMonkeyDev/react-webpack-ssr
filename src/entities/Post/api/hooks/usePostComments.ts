import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import { $api, ApiResponse } from '@/shared/api';
import { Comment } from '@/entities/Comment';

const initialState: ApiResponse<Comment[] | null> = {
  data: null,
  isLoading: true,
  isError: false,
};

export function usePostComments(postId: string) {
  const [postComments, setPostComments] = useState<ApiResponse<Comment[] | null>>(initialState);

  useEffect(() => {
    if (postId === '') {
      setPostComments(initialState);
    }
    const fetchData = async () => {
      try {
        const response: AxiosResponse<Comment[]> = await $api.get(`/posts/${postId}/comments`);
        setPostComments({
          data: response.data,
          isLoading: false,
          isError: false,
        });
      } catch (error) {
        setPostComments({
          data: null,
          isLoading: false,
          isError: true,
        });
      }
    };

    if (postId !== '') {
      fetchData();
    }
  }, [postId]);

  return postComments;
}
