import { Module } from 'vuex';
import { ProcedureState } from './procedures.state.d';
import { mutations } from './procedures.mutations';
import { getters } from './procedures.getters';
import { actions } from './procedures.actions';

export const ProceduresStore: Module<ProcedureState, any> = {
  state: {
    procedures: [],
  },
  getters,
  actions,
  mutations,
};
