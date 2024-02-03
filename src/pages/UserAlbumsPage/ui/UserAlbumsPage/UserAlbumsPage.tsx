import { useParams } from 'react-router-dom';
import { MouseEvent, useState } from 'react';
import { EyeIcon } from '@heroicons/react/24/solid';
import { useUserAlbums } from '@/entities/User';
import { AppLoader } from '@/shared/ui/AppLoader';
import { AppRoutes } from '@/shared/config/routeConfig';
import { AppLink } from '@/shared/ui/AppLink';
import { AlbumPhotosModal } from '../AlbumPhotosModal';

const UserAlbumsPage = () => {
  const { id } = useParams();

  const { isLoading, data, isError } = useUserAlbums(id as string);
  const [openedPhotos, setOpenedPhotos] = useState<string>('');

  if (isLoading) {
    return <AppLoader />;
  }

  if (isError || data === null) {
    return <h1>Помилка при ортиманні альбомів користувача!</h1>;
  }

  const photosClickHandler = (value: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setOpenedPhotos(value);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-3xl mb-3">Альбоми</h1>
        <AppLink href={`${AppRoutes.USERS}`}>Повренутися</AppLink>
      </div>
      <div className="flex flex-col gap-4">
        {data.map((album) => (
          <div key={album.id} className="flex shrink gap-2 border-dashed border-2 border-yellow-600 rounded p-5">
            <span className="text-lg flex-1">{album.title}</span>
            <AppLink type="button" onClick={photosClickHandler(album.id.toString())}><EyeIcon className="w-6 h-6" /></AppLink>
          </div>
        ))}
      </div>
      <AlbumPhotosModal
        albumId={openedPhotos}
        isOpen={openedPhotos !== ''}
        onClose={() => setOpenedPhotos('')}
        unmountOnClose
      />
    </div>
  );
};
export default UserAlbumsPage;
