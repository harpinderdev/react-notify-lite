import { useContext } from 'react';
import { ToastContext, ToastContextType } from '../context/ToastProvider';

export const useNotify = (): ToastContextType => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useNotify must be used within a ToastProvider');
  }

  return context;
};
