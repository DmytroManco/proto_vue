import { ActionTree } from 'vuex';
import { NotificationState } from './notification.state.d';

export const actions: ActionTree<NotificationState, any> = {
  showErrors({ commit }, error: Error) {
    commit('setToast', { message: error.message, type: 'error' });
    commit('showNotification');
    throw new Error(error.message);
  },
};
