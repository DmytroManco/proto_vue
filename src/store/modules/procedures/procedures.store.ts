import { Module } from 'vuex';
import { ProcedureState } from './procedures.state.d';
import { mutations } from './procedures.mutations';
import { getters } from './procedures.getters';
import { actions } from './procedures.actions';

const namespaced = true;

export const ProceduresStore: Module<ProcedureState, any> = {
  namespaced,
  state: {
    procedures: [],
  },
  getters,
  actions,
  mutations,
};
