 


export type HospitalFormValues = {
  name: string;
  address: string;
  city: string;
  latitude?: number | undefined;
  longitude?: number | undefined;
  phone: string;
  totalBeds: number;
  availableBeds: number;
}