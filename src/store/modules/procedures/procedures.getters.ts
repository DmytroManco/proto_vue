import { GetterTree } from 'vuex';
import { ProcedureState } from './procedures.state.d';

export const getters: GetterTree<ProcedureState, any> = {
  getProceduresList: (state) => state.procedures,
};
