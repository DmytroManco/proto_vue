import { Module } from 'vuex';
import { mutations } from '@/store/modules/patient/patients.mutations';
import { getters } from '@/store/modules/patient/patients.getters';
import { actions } from './patients.actions';
import { PatientsStateInterface } from './patients.state.d';

const namespaced = true;

export const PatientsStore: Module<PatientsStateInterface, any> = {
  namespaced,
  state: {
    patients: [],
    currentPatient: null,
  },
  getters,
  actions,
  mutations,
};
