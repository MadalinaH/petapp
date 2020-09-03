export interface Appointment {
  id: number;
  pet_id: number;
  pet_name: string;
  vet_id: number;
  vet_name: string;
  date: Date;
  time: Date;
  notes: string;
}
