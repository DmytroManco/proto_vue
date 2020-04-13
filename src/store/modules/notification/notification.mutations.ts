import { MutationTree } from 'vuex';
import { NotificationState } from './notification.state.d';

export const mutations: MutationTree<NotificationState> = {
  setError: (state, error) => {
    state.error = error;
  },
  clearError: (state) => {
    state.error = null;
  },
};
