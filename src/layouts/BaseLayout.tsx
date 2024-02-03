import { PropsWithChildren } from 'react';

export const BaseLayout = ({ children }: PropsWithChildren) => (
  <div className="mx-2 py-10 xl:max-w-[1200px] xl:mx-auto xl:py-20">{children}</div>
);
