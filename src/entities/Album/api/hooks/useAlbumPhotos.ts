import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import { $api, ApiResponse } from '@/shared/api';
import { Photo } from '@/entities/Photo';

const initialState: ApiResponse<Photo[] | null> = {
  data: null,
  isLoading: true,
  isError: false,
};

export function useAlbumPhotos(albumId: string) {
  const [albumPhotos, setAlbumPhotos] = useState<ApiResponse<Photo[] | null>>(initialState);

  useEffect(() => {
    if (albumId === '') {
      setAlbumPhotos(initialState);
    }
    const fetchData = async () => {
      try {
        const response: AxiosResponse<Photo[]> = await $api.get(`/albums/${albumId}/photos`);
        setAlbumPhotos({
          data: response.data,
          isLoading: false,
          isError: false,
        });
      } catch (error) {
        setAlbumPhotos({
          data: null,
          isLoading: false,
          isError: true,
        });
      }
    };

    if (albumId !== '') {
      fetchData();
    }
  }, [albumId]);

  return albumPhotos;
}
