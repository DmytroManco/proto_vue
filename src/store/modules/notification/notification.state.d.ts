import { Toast } from '@/interfaces/toast.d';

export interface NotificationState {
  toast: Toast | null;
  showToast: boolean;
}
