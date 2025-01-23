import Icon from '../Icon';
import * as S from './styles';
import { nanoid } from 'nanoid';
import { IToast } from './types';
import React, { useState, useEffect } from 'react';
import { withTheme } from 'styled-components';
import TextDisplay from '../../TextElements/TextDisplay';

const toastManager = {
  listeners: new Set<(toasts: IToast[]) => void>(),
  toasts: [] as IToast[],

  subscribe(listener: (toasts: IToast[]) => void) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  },

  addToast(toast: IToast) {
    const id = nanoid();
    this.toasts.push({ ...toast, id });
    this.notify();
  },

  removeToast(id: string) {
    this.toasts = this.toasts.filter((toast) => toast.id !== id);
    this.notify();
  },

  notify() {
    this.listeners.forEach((listener) => listener([...this.toasts]));
  },
};

export const toast = {
  success: (message: string, options?: Partial<IToast>) =>
    toastManager.addToast({ message, variant: 'success', ...options }),

  error: (message: string, options?: Partial<IToast>) =>
    toastManager.addToast({ message, variant: 'error', ...options }),

  warning: (message: string, options?: Partial<IToast>) =>
    toastManager.addToast({ message, variant: 'warning', ...options }),
};

const ToastMessage: React.FC<IToast> = ({
  id,
  message,
  color,
  timeout,
  background = 'section',
  borderColor,
  borderRadius = 'xs',
  height,
  variant,
  width,
}) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      const removeTimer = setTimeout(() => {
        toastManager.removeToast(id);
      }, 300);

      return () => clearTimeout(removeTimer);
    }, timeout || 3000);

    return () => clearTimeout(timer);
  }, [id]);

  return (
    <S.ToastItem
      $isExiting={isExiting}
      $background={background}
      $borderColor={borderColor}
      $borderRadius={borderRadius}
      $height={height}
      $width={width}
      $variant={variant}
    >
      <TextDisplay text={message} size="sm" weight="strong" color={color} />

      <S.CloseIcon onClick={() => toastManager.removeToast(id)}>
        <Icon icon="ErrorTwoIcon" iconSize={10} background="highlight" />
      </S.CloseIcon>
    </S.ToastItem>
  );
};

const ToastContainer: React.FC = () => {
  const [toasts, setToasts] = useState<IToast[]>([]);

  useEffect(() => {
    const unsubscribe = toastManager.subscribe((toasts) => {
      setToasts([...toasts]);
    });

    return () => unsubscribe();
  }, []);

  return (
    <S.ToastContainerStyled>
      {toasts.map((toast) => (
        <ToastMessage key={toast?.id} {...toast} />
      ))}
    </S.ToastContainerStyled>
  );
};

export default withTheme(ToastContainer) as React.FC<IToast>;
