import { RouteProps, Navigate } from 'react-router-dom';
import { AppRoutes } from '@/shared/config/routeConfig/AppRoutes';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { UsersPage } from '@/pages/UsersPage';
import { UserPostsPage } from '@/pages/UserPostsPage';
import { UserAlbumsPage } from '@/pages/UserAlbumsPage';

export const routeConfig: RouteProps[] = [
  {
    path: AppRoutes.MAIN,
    element: <UsersPage />,
  },
  {
    path: AppRoutes.USERS,
    element: <Navigate to={AppRoutes.MAIN} replace />,
  },
  {
    path: AppRoutes.NOT_FOUND,
    element: <NotFoundPage>Не знайдено</NotFoundPage>,
  },
  {
    path: `${AppRoutes.USERS}/:id/posts`,
    element: <UserPostsPage />,
  },
  {
    path: `${AppRoutes.USERS}/:id/albums`,
    element: <UserAlbumsPage />,
  },
];
