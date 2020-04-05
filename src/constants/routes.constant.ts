import { NavItemI } from '@/interfaces/navitem.d';

export enum ROUTES_NAMES {
  Home = 'Home',
  Patients = 'Patients',
  PatientInfo = 'patientInfo',
  AddProcedure = 'addProcedure',
}

export const NAV_ROUTES: NavItemI[] = [
  { title: 'Home', path: '/', name: ROUTES_NAMES.Home },
  { title: 'Patients', path: 'patients', name: ROUTES_NAMES.Patients },
];
