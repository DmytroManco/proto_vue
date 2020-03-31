import { NavItemI } from '@/interfaces/navitem.d';

export enum ROUTES_NAMES {
  Home = 'Home',
  Patients = 'Patients',
  PatientInfo = 'patientInfo',
  AddProcedure = 'addProcedure',
}

const NAV_ROUTES: NavItemI[] = [
  { title: 'Home', path: '/', name: ROUTES_NAMES.Home },
  { title: 'Patients', path: 'patients', name: ROUTES_NAMES.Patients },
];

export default {
  NAV_ROUTES,
  ROUTES_NAMES,
};
