export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ToastOptions {
  type?: ToastType;
  duration?: number;
  position?: 'top-left' | 'top-right' | 'top-center' | 'bottom-left' | 'bottom-right' | 'bottom-center';
}

export interface Toast {
  id: string;
  message: string;
  type: ToastType;
  duration: number;
  position: string;
}

export const createToast = (
  message: string,
  options: ToastOptions = {}
): Toast => {
  const {
    type = 'info',
    duration = 3000,
    position = 'top-right',
  } = options;

  return {
    id: `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    message,
    type,
    duration,
    position,
  };
};
