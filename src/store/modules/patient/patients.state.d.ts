import { PatientInterface } from '@/interfaces/patient.d';

export interface PatientsStateInterface {
  patients: PatientInterface [];
  currentPatient: PatientInterface | null;
}
