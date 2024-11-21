export interface RideModel {
  id: number;
  name: string;
}

export interface RideModelHistory {
  customer_id: string;
  rides: {
    id: number;
    date: Date;
    origin: string;
    destination: string;
    distance: number;
    duration: string;
    driver: {
      id: number;
      name: string;
    };
    value: number;
  }[];
}
