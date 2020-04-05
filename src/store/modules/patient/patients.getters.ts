import { GetterTree } from 'vuex';
import { PatientsStateInterface } from './patients.state.d';

export const getters: GetterTree<PatientsStateInterface, any> = {
  getPatientList: (state) => state.patients,
  getCurrentPatient: (state) => state.currentPatient,
};
