export interface createRoomsType {
  id: string;
  title: string;
  picture: string;
  description: string;
  capacity: string;
  location: string;
  country: string;
  bedroom: string;
  bed: string;
  bath: string;
  price: number;
  freeWifi?: boolean;
  parking?: boolean;
  gym?: boolean;
  pool?: boolean;
  roomNumber: string;
}

export interface createCategory {
  id: string;
  roomId: string;
  title: string;
}
