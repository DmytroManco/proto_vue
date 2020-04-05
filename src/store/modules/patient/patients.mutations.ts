import { MutationTree } from 'vuex';
import { PatientsStateInterface } from './patients.state.d';

export const mutations: MutationTree<PatientsStateInterface> = {
  setPatientsToStore: (state, patients) => { state.patients = patients; },
  setCurrentPatient: (state, patient) => { state.currentPatient = patient; },
};
