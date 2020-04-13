import { ActionTree } from 'vuex';
import { NotificationState } from './notification.state.d';

export const actions: ActionTree<NotificationState, any> = {
  showErrors({ commit }, error) {
    console.log(error);
    throw new Error(error);
  },
};
