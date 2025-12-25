import React, { createContext, useState, useCallback, ReactNode } from 'react';
import Toast from '../components/Toast';
import { Toast as ToastType, ToastOptions, createToast } from '../utils/createToast';

interface ToastContextType {
  notify: (message: string, options?: ToastOptions) => void;
  success: (message: string, options?: Omit<ToastOptions, 'type'>) => void;
  error: (message: string, options?: Omit<ToastOptions, 'type'>) => void;
  warning: (message: string, options?: Omit<ToastOptions, 'type'>) => void;
  info: (message: string, options?: Omit<ToastOptions, 'type'>) => void;
}

export const ToastContext = createContext<ToastContextType | undefined>(undefined);

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const notify = useCallback((message: string, options?: ToastOptions) => {
    const toast = createToast(message, options);
    setToasts((prevToasts) => [...prevToasts, toast]);
  }, []);

  const success = useCallback((message: string, options?: Omit<ToastOptions, 'type'>) => {
    notify(message, { ...options, type: 'success' });
  }, [notify]);

  const error = useCallback((message: string, options?: Omit<ToastOptions, 'type'>) => {
    notify(message, { ...options, type: 'error' });
  }, [notify]);

  const warning = useCallback((message: string, options?: Omit<ToastOptions, 'type'>) => {
    notify(message, { ...options, type: 'warning' });
  }, [notify]);

  const info = useCallback((message: string, options?: Omit<ToastOptions, 'type'>) => {
    notify(message, { ...options, type: 'info' });
  }, [notify]);

  const removeToast = useCallback((id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  const groupedToasts = toasts.reduce((acc, toast) => {
    if (!acc[toast.position]) {
      acc[toast.position] = [];
    }
    acc[toast.position].push(toast);
    return acc;
  }, {} as Record<string, ToastType[]>);

  return (
    <ToastContext.Provider value={{ notify, success, error, warning, info }}>
      {children}
      {Object.entries(groupedToasts).map(([position, positionToasts]) => (
        <div key={position} className={`toast-container toast-${position}`}>
          {positionToasts.map((toast) => (
            <Toast key={toast.id} toast={toast} onRemove={removeToast} />
          ))}
        </div>
      ))}
    </ToastContext.Provider>
  );
};
