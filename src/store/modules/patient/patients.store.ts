import { Module } from 'vuex';
import { mutations } from '@/store/modules/patient/patients.mutations';
import { getters } from '@/store/modules/patient/patients.getters';
import { actions } from './patients.actions';
import { PatientsStateInterface } from './patients.state.d';

export const PatientsStore: Module<PatientsStateInterface, any> = {
  state: {
    patients: [],
    currentPatient: null,
  },
  getters,
  actions,
  mutations,
};
