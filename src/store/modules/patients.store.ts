import { Module } from 'vuex';
import { PatientI } from '@/interfaces/patient.d';

interface PatientsStateI {
  patients: PatientI[];
  currentPatient: PatientI | null;
}

const BASE_PATIENT_API = 'http://localhost:3000/patients';

export const PatientsStore: Module<PatientsStateI, any> = {
  state: {
    patients: [],
    currentPatient: null,
  },
  getters: {
    getPatientList: (state) => state.patients,
    getCurrentPatient: (state) => state.currentPatient,
  },
  actions: {
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
    async updatePatientInfo({ commit }, patient: PatientI) {
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
  },
  mutations: {
    setPatientsToStore: (state, patients) => { state.patients = patients; },
    setCurrentPatient: (state, patient) => { state.currentPatient = patient; },
  },
};
