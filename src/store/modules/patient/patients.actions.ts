import { ActionTree } from 'vuex';
import { PatientInterface } from '@/interfaces/patient.d';
import { PatientsStateInterface } from './patients.state.d';

const BASE_PATIENT_API = 'http://localhost:3000/patients';

export const actions: ActionTree<PatientsStateInterface, any> = {
  async getPatients({ commit }) {
    const response = await fetch(BASE_PATIENT_API);
    const patients = await response.json();
    commit('setPatientsToStore', patients);
  },
  async getPatient({ commit }, id: string) {
    const response = await fetch(`${BASE_PATIENT_API}/${id}`);
    const patient = await response.json();
    commit('setCurrentPatient', patient);
  },
  async updatePatientInfo({ commit }, patient: PatientInterface) {
    const request = await fetch(`${BASE_PATIENT_API}/${patient.id}`, {
      method: 'PUT',
      body: JSON.stringify(patient),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    });
    const response = await request.json();
    commit('setCurrentPatient', response);
  },
  async patientsServerSearch({ commit }, query: string) {
    const response = await fetch(`${BASE_PATIENT_API}?q=${query}`);
    const patients = await response.json();
    commit('setPatientsToStore', patients);
  },
};
