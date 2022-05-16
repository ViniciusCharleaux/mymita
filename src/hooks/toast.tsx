import { ReactNode, createContext, useCallback, useContext} from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import 'sweetalert2/dist/sweetalert2.min.css'

/* Interface do Contexto */
interface ToastContextData {
  toastCenterSuccess: (title: string) => void;
  toastCenterError: (title: string) => void;
  toastTopSuccess: (title: string) => void;
  toastTopError: (title: string) => void;
  toastAwaiting: () => void;
  closeToastAwaiting: () => void;
}

interface ToastProviderData {
  children: ReactNode;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider = ({ children }: ToastProviderData) => {

  const MySwal = withReactContent(Swal)

  const ToastTop = MySwal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 6000,
    timerProgressBar: true,
    didOpen: toast => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    },
  })
  
  const ToastAwaiting = MySwal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,

    didOpen: toast => {
      MySwal.showLoading()
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    },
  })

  const ToastCenter = MySwal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  
    didOpen: toast => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    },
  })
 
  const toastAwaiting = useCallback(() => {
    ToastAwaiting.fire({
      title: 'Carregando informações.',
    })
  }, []);

  const closeToastAwaiting = useCallback(() => {
    ToastAwaiting.close()
  }, []);

  const toastCenterSuccess = useCallback((title: string) => {
    ToastCenter.fire({
      icon: 'success',
      title: title,
    })
  }, []);

  const toastCenterError = useCallback((title: string) => {
    ToastCenter.fire({
      icon: 'error',
      title: title,
    })
  }, []);

  const toastTopSuccess = useCallback((title: string) => {
    ToastTop.fire({
      icon: 'success',
      title: title,
    })
  }, []);

  const toastTopError = useCallback((title: string) => {
    ToastTop.fire({
      icon: 'error',
      title: title,
    })
  }, []);

  return (
    <ToastContext.Provider
      value={{
        toastCenterSuccess,
        toastCenterError,
        toastTopSuccess,
        toastTopError,
        toastAwaiting,
        closeToastAwaiting
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within an ToastProvider');
  }
  return context;
}

export { ToastProvider, useToast };