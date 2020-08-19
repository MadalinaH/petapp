export interface Appointment {
  id: number;
  pet_id: number;
  vet_id: number;
  date: Date;
  // check how to better represent time field
  time: Date;
  notes: string;
}
