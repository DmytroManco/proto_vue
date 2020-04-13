export enum ToastType {
  ERROR = 'error',
  SUCCESS = 'success',
  IFO = 'info',
}

export interface Toast {
  message: string;
  type: ToastType;
  code?: string;
}

export interface ToastOptions {
  absolute?: boolean;
  left?: boolean;
  bottom?: boolean;
  right?: boolean;
  top?: boolean;
  timeout?: number;
  multiline?: boolean;
  color?: string | undefined;
  value?: any;
  vertical?: boolean;
}
