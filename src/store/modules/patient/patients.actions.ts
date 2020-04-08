import axios from 'axios';
import { ActionTree } from 'vuex';
import { PatientInterface } from '@/interfaces/patient.d';
import { PatientsStateInterface } from './patients.state.d';

const BASE_PATIENT_API = 'http://localhost:3000/patients';

export const actions: ActionTree<PatientsStateInterface, any> = {
  async getPatients({ commit }) {
    const response = await axios.get(BASE_PATIENT_API);
    const patients = response.data;
    commit('setPatientsToStore', patients);
  },
  async getPatient({ commit }, id: string) {
    const response = await axios.get(`${BASE_PATIENT_API}/${id}`);
    const patient = response.data;
    commit('setCurrentPatient', patient);
  },
  async updatePatientInfo({ commit }, patient: PatientInterface) {
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
  },
  async patientsServerSearch({ commit }, query: string) {
    const response = await axios.get(`${BASE_PATIENT_API}?q=${query}`);
    const patients = await response.data;
    commit('setPatientsToStore', patients);
  },
};
