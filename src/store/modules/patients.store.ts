import { Module } from 'vuex';
import { IPatient } from '@/interfaces/patient.d';

interface PatientsStateI {
  patients: IPatient[];
}

export const PatientsStore: Module<PatientsStateI, any> = {
  state: {
    patients: [],
  },
  getters: {
    getPatientList: (state) => state.patients,
  },
  actions: {
    async getPatients({ commit }) {
      const response = await fetch('http://localhost:3000/patients');
      const paients = await response.json();
      commit('setPatientsToStore', paients);
    },
  },
  mutations: {
    setPatientsToStore: (state, patients) => { state.patients = patients; },
  },
};
