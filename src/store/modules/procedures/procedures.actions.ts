import axios from 'axios';
import { ActionTree } from 'vuex';
import { ProcedureState } from './procedures.state.d';

const BASE_PROCEDURES_API = 'http://localhost:3000/procedures';

export const actions: ActionTree<ProcedureState, any> = {
  async getPatientProceduresList({ commit }, id: string) {
    const response = await axios.get(`${BASE_PROCEDURES_API}/${id}`);
    const procedures = await response.data;
    commit('setProceduresList', procedures.procedures);
  },
  async updatePatientProcedures({ commit }, payload) {
    const request = await axios({
      method: 'PUT',
      url: `${BASE_PROCEDURES_API}/${payload.userID}`,
      data: {
        procedures: payload.procedures,
      },
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    });
    const response = request.data;
    commit('setProceduresList', response.procedures);
  },
};
