import { Module } from 'vuex';
import { mutations } from './notification.mutations';
import { getters } from './notification.getters';
import { actions } from './notification.actions';
import { NotificationState } from './notification.state.d';

const namespaced = true;

export const NotificationStore: Module<NotificationState, any> = {
  namespaced,
  state: {
    toast: null,
    showToast: false,
  },
  getters,
  actions,
  mutations,
};
