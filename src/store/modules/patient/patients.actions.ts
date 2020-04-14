import axios from 'axios';
import { ActionTree } from 'vuex';
import { STORE_ACTIONS } from '@/constants/store.constants';
import { PatientInterface } from '@/interfaces/patient.d';
import { PatientsStateInterface } from './patients.state.d';

const BASE_PATIENT_API = 'http://localhost:3000/patients';

export const actions: ActionTree<PatientsStateInterface, any> = {
  async getPatients({ commit }) {
    try {
      const response = await axios.get(BASE_PATIENT_API);
      const patients = response.data;
      commit('setPatientsToStore', patients);
    } catch (e) {
      this.dispatch(STORE_ACTIONS.NOTIFICATION_ACTIONS.showErrors, e);
    }
  },
  async getPatient({ commit }, id: string) {
    try {
      const response = await axios.get(`${BASE_PATIENT_API}/${id}`);
      const patient = response.data;
      commit('setCurrentPatient', patient);
    } catch (e) {
      this.dispatch(STORE_ACTIONS.NOTIFICATION_ACTIONS.showErrors, e);
    }
  },
  async updatePatientInfo({ commit }, patient: PatientInterface) {
    try {
      const request = await axios({
        method: 'PUT',
        url: `${BASE_PATIENT_API}/${patient.id}`,
        data: patient,
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
      });
      const response = await request.data;
      commit('setCurrentPatient', response);
    } catch (e) {
      this.dispatch(STORE_ACTIONS.NOTIFICATION_ACTIONS.showErrors, e);
    }
  },
  async patientsServerSearch({ commit }, query: string) {
    try {
      const response = await axios.get(`${BASE_PATIENT_API}?q=${query}`);
      const patients = await response.data;
      commit('setPatientsToStore', patients);
    } catch (e) {
      this.dispatch(STORE_ACTIONS.NOTIFICATION_ACTIONS.showErrors, e);
    }
  },
};
