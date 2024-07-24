export interface createRoomsType {
  id: string;
  title: string;
  picture: string;
  description?: string;
  capacity?: string;
  location?: string;
  country: string;
  category: string;
  bedroom?: string;
  bed?: string;
  bath?: string;
  price: number;
  freeWifi?: boolean;
  parking?: boolean;
  gym?: boolean;
  pool?: boolean;
  roomNumber: string;
  path: string;
}

export interface createCategory {
  id: string;
  roomId: string;
  title: string;
}

export interface ContentItem {
  [key: string]: string | number;
}
