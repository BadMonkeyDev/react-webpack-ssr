import { memo, Suspense, useCallback } from 'react';
import { Route, RouteProps, Routes } from 'react-router-dom';
import { routeConfig } from '@/shared/config/routeConfig';
import { AppLoader } from '@/shared/ui/AppLoader';
import { BaseLayout } from '@/layouts/BaseLayout';

export const AppRouter = memo(() => {
  const renderWithWrapper = useCallback((route: RouteProps) => {
    const element = (
      <BaseLayout>
        <Suspense fallback={
          <AppLoader />
        }
        >
          {route.element}
        </Suspense>
      </BaseLayout>
    );

    return (
      <Route
        key={route.path}
        path={route.path}
        element={element}
      />
    );
  }, []);

  return (
    <Routes>
      {routeConfig.map(renderWithWrapper)}
    </Routes>
  );
});
