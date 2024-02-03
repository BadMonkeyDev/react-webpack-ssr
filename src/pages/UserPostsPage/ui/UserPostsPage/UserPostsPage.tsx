import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useUserPosts } from '@/entities/User';
import { AppLoader } from '@/shared/ui/AppLoader';
import { AppRoutes } from '@/shared/config/routeConfig';
import { AppLink } from '@/shared/ui/AppLink';
import { PostCard } from '../PostCard';
import { PostCommentsModal } from '@/pages/UserPostsPage/ui/PostCommentsModal';

const UserPostsPage = () => {
  const { id } = useParams();

  const { isLoading, data, isError } = useUserPosts(id as string);
  const [openedComments, setOpenedComments] = useState<string>('');

  if (isLoading) {
    return <AppLoader />;
  }

  if (isError || data === null) {
    return <h1>Помилка при отриманні статей користувача!</h1>;
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-3xl mb-3">Статті</h1>
        <AppLink href={`${AppRoutes.USERS}`}>Повренутися</AppLink>
      </div>
      <div className="flex flex-col gap-2">
        {data.map((post) => (
          <PostCard key={post.id} post={post} setOpenedComments={(value) => setOpenedComments(value)} />
        ))}
      </div>
      <PostCommentsModal
        postId={openedComments}
        isOpen={openedComments !== ''}
        onClose={() => setOpenedComments('')}
        unmountOnClose
      />
    </div>
  );
};
export default UserPostsPage;
