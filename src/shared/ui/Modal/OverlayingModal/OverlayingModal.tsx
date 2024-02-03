import cn from 'classnames';
import {
  ReactNode, useCallback, useEffect, useState,
} from 'react';
import { Portal } from '@/shared/ui/Portal';
import { useBodyOverflow } from '@/shared/libs/hooks/useBodyOverflow';
import { ModalProps } from '../types/modalProps';
import styles from './OverlayingModal.module.scss';

interface OverlayingModalProps extends ModalProps {
  children?: ReactNode;
  className?: string;
  contentClassName?: string;
}

export const OverlayingModal = ({
  isOpen, children, lazy, onClose, unmountOnClose, centered = false, className, contentClassName,
}: OverlayingModalProps) => {
  const [isMounted, setMounted] = useState(false);
  const closeHandler = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);
  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);
  useEffect(() => {
    if (isOpen) {
      setMounted(true);
    }
  }, [isOpen]);

  useBodyOverflow({ condition: isOpen });

  useEffect(() => {
    window.addEventListener('keyup', onKeyDown);
    return () => {
      window.removeEventListener('keyup', onKeyDown);
    };
  }, [onKeyDown]);

  const mods = {
    [styles.opened]: isOpen,
    [styles.centered]: centered,
  };
  if (lazy && !isMounted) return null;

  if (unmountOnClose && !isOpen) return null;

  return (
    <Portal>
      <div role="presentation" className={cn(styles.root, mods, className)} onMouseDown={closeHandler}>
        <div role="presentation" className={cn(styles.content, contentClassName)} onMouseDown={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </Portal>
  );
};
