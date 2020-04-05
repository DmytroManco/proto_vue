import { PatientInterface } from '@/interfaces/patient';

export interface PatientsStateInterface {
  patients: PatientInterface [];
  currentPatient: PatientInterface | null;
}
