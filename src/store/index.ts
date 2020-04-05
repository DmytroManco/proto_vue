import Vue from 'vue';
import Vuex from 'vuex';
import { ProceduresStore } from './modules/procedures/procedures.store';
import { PatientsStore } from './modules/patient/patients.store';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    PatientsStore,
    ProceduresStore,
  },
});
