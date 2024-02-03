import cn from 'classnames';
import { MainModal, ModalProps } from '@/shared/ui/Modal';
import { AppLoader } from '@/shared/ui/AppLoader';
import { useAlbumPhotos } from '@/entities/Album';

export interface AlbumPhotosModalProps extends ModalProps{
  className?: string;
  albumId: string;
}

export const AlbumPhotosModal = (props: AlbumPhotosModalProps) => {
  const {
    className,
    albumId,
    ...modalProps
  } = props;

  const { isError, data, isLoading } = useAlbumPhotos(albumId);

  return (
    <MainModal
      className=" max-w-[96%]"
      {...modalProps}
    >
      <div className={cn(className, 'px-6 py-3')}>
        {/* eslint-disable-next-line no-nested-ternary */}
        {isLoading ? <AppLoader /> : isError ? <h1>Помилка при отриманні фото альбома!</h1> : (
          <div className="max-h-96 overflow-y-scroll grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {data?.map(({ id, title, thumbnailUrl }) => (
              <div key={id} className="border-4 border-solid border-blue-800 rounded py-2 px-4 flex flex-col justify-between">
                <span className="text-yellow-600 font-semibold">{title}</span>
                <img className="w-64 h-64 mt-2" src={thumbnailUrl} alt={title} />
              </div>
            ))}
          </div>
        )}
      </div>
    </MainModal>
  );
};
