import { ActionTree } from 'vuex';
import { NotificationState } from './notification.state.d';

export const actions: ActionTree<NotificationState, any> = {
  showErrors({ commit }, error: Error) {
    commit('setError', { message: error.message });
    throw new Error(error.message);
  },
};
