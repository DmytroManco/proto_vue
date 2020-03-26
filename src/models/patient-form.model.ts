import { IPatient } from '@/interfaces/patient';

export class PatientFormModel {
  id: string;
  email: string;
  phone: string;
  address: string;
  address2: string;
  state: string;
  city: string;
  zip: number;

  // TODO: default values only for dev purposes
  constructor(patient: IPatient = {} as IPatient) {
    this.id = patient.id || '';
    this.email = patient.email || '';
    this.phone = patient.phone || '';
    this.address = patient.address || '';
    this.address2 = patient.address2 || '';
    this.state = patient.state || '';
    this.city = patient.city || '';
    this.zip = patient.zip || NaN;
  }
}
