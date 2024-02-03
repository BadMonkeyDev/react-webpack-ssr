import { ReactNode } from 'react';
import cn from 'classnames';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { OverlayingModal } from '../OverlayingModal';
import { ModalProps } from '../types/modalProps';
import styles from './MainModal.module.scss';

export interface MainModalProps extends ModalProps {
  className?: string;
  title?: string;
  withCloseButton?: boolean;
  children?: ReactNode;
}

export const MainModal = ({
  className,
  onClose,
  centered,
  unmountOnClose,
  lazy,
  isOpen,
  withCloseButton = true,
  title,
  children,
}: MainModalProps) => (
  <OverlayingModal
    isOpen={isOpen}
    centered={centered}
    onClose={onClose}
    lazy={lazy}
    unmountOnClose={unmountOnClose}
  >
    <div className={cn(styles.root, className)}>
      {withCloseButton
        && (
          <button className={styles.closeButton} onClick={onClose}>
            <XMarkIcon className="w-6 h-6" />
          </button>
        )}
      {title && <h3 className={styles.headingTitle}>{title}</h3>}
      {children}
    </div>
  </OverlayingModal>
);
