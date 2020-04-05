import { ActionTree } from 'vuex';
import { ProcedureState } from './procedures.state.d';

const BASE_PROCEDURES_API = 'http://localhost:3000/procedures';

export const actions: ActionTree<ProcedureState, any> = {
  async getPatientProceduresList({ commit }, id: string) {
    const response = await fetch(`${BASE_PROCEDURES_API}/${id}`);
    const procedures = await response.json();
    commit('setProceduresList', procedures.procedures);
  },
  async updatePatientProcedures({ commit }, payload) {
    const request = await fetch(`${BASE_PROCEDURES_API}/${payload.userID}`, {
      method: 'PUT',
      body: JSON.stringify({
        procedures: payload.procedures,
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    });
    const response = await request.json();
    commit('setProceduresList', response.procedures);
  },
};
