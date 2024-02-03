import cn from 'classnames';
import { ReactNode } from 'react';
import styles from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
  children: ReactNode;
}

export const NotFoundPage = (props:NotFoundPageProps) => {
  const {
    className,
    children,
  } = props;
  return (
    <div className={cn(styles.notFoundPage, [className])}>
      {children}
    </div>
  );
};
