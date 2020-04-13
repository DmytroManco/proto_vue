import { MutationTree } from 'vuex';
import { NotificationState } from './notification.state.d';

export const mutations: MutationTree<NotificationState> = {
  setToast: (state, error) => {
    state.toast = error;
  },
  clearToast: (state) => {
    state.toast = null;
  },
  showNotification: (state) => {
    state.showToast = true;
  },
  hideNotification: (state) => {
    state.showToast = false;
  },
};
