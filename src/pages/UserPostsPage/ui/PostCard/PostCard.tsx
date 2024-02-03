import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';
import { MouseEvent } from 'react';
import { Post } from '@/entities/Post';

export interface PostCardProps {
  post: Post;
  setOpenedComments: (value: string) => void;
}

export const PostCard = (props: PostCardProps) => {
  const {
    post,
    setOpenedComments,
  } = props;

  const commentsClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpenedComments(post.id.toString());
  };

  return (
    <div className="flex gap-10 items-center shrink">
      <div className="bg-gray-50 border-2 border-solid border-blue-600 rounded p-4 flex-1 flex gap-4">
        <div>
          <h2 className="font-semibold mb-2">{post.title}</h2>
          <p>{post.body}</p>
        </div>
        <div className="border-l-2 border-dashed border-gray-300 flex items-center pl-4 ml-auto">
          <button type="button" onClick={commentsClickHandler}>
            <ChatBubbleBottomCenterTextIcon className="w-6 h-6 text-yellow-600" />
          </button>
        </div>
      </div>
    </div>

  );
};
