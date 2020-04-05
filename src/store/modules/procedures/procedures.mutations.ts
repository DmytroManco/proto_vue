import { MutationTree } from 'vuex';
import { ProcedureState } from './procedures.state.d';

export const mutations: MutationTree<ProcedureState> = {
  setProceduresList: (state, procedures) => { state.procedures = procedures; },
};
