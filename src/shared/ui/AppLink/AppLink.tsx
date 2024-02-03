import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';
import cn from 'classnames';
import styles from './AppLink.module.scss';

type LinkType = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>

type AppLinkColor = 'blue' | 'yellow' | 'red' | 'greed';
type AppLinkType = 'link' | 'button';

export interface AppLinkProps extends LinkType {
  color?: AppLinkColor;
  type?: AppLinkType;
}

export const AppLink = (props: AppLinkProps) => {
  const {
    className,
    color = 'blue',
    type = 'link',
    children,
    ...rest
  } = props;

  return (
    <a
      className={cn(styles.root, styles[type], styles[color], className)}
      {...rest}
    >
      {children}
    </a>
  );
};
