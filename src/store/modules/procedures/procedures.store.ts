import { Module } from 'vuex';
import { ProcedureI } from '@/interfaces/procedure.d';

interface ProcedureStateI {
  procedures: ProcedureI[];
}

const BASE_PROCEDURES_API = 'http://localhost:3000/procedures';

export const ProceduresStore: Module<ProcedureStateI, any> = {
  state: {
    procedures: [],
  },
  getters: {
    getProceduresList: (state) => state.procedures,
  },
  actions: {
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
  },
  mutations: {
    setProceduresList: (state, procedures) => { state.procedures = procedures; },
  },
};
