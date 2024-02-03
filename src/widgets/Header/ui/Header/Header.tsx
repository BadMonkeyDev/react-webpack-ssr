import cn from 'classnames';
import styles from './Header.module.scss';

interface HeaderProps {
  className?: string;
}

export const Header = ({
  className,
}: HeaderProps) => (
  <header className={cn(styles.header, className, 'bg-white')}>
    header
  </header>
);
