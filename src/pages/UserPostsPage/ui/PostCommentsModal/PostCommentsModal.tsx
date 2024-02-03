import cn from 'classnames';
import { MainModal, ModalProps } from '@/shared/ui/Modal';
import { usePostComments } from '@/entities/Post';
import { AppLoader } from '@/shared/ui/AppLoader';

export interface PostCommentsModalProps extends ModalProps{
  className?: string;
  postId: string;
}

export const PostCommentsModal = (props: PostCommentsModalProps) => {
  const {
    className,
    postId,
    ...modalProps
  } = props;

  const { isError, data, isLoading } = usePostComments(postId);

  return (
    <MainModal
      {...modalProps}
    >
      <div className={cn(className, 'px-6 py-3')}>
        {/* eslint-disable-next-line no-nested-ternary */}
        {isLoading ? <AppLoader /> : isError ? <h1>Помилка при отриманні коментарів до статті!</h1> : (
          <div className="flex flex-col gap-2">
            {data?.map(({ id, name, body }) => (
              <div key={id} className="flex flex-col gap-1 border border-solid border-green-800 rounded py-1 px-2">
                <span className="text-green-800 font-semibold">{name}</span>
                <p>{body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </MainModal>
  );
};
