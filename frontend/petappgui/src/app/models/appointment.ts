export interface Appointment {
  id: number;
  pet_id: number;
  vet_id: number;
  date: Date;
  // check how to represent time field
  time: Date;
  notes: string;
}
