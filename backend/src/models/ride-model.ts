export interface RideModel {
  customer_id: string;
  origin: string;
  destination: string;
}
export interface RideResponseModel extends RideBasicResponseModel {
  options: DriveModel[];
}
export interface RideBasicResponseModel {
  origin: {
    latitude: number;
    longitude: number;
  };
  destination: {
    latitude: number;
    longitude: number;
  };
  distance: number;
  duration: string;
  routeResponse: object; // O tipo pode ser ajustado se soubermos a estrutura do objeto
}

export interface DriveModel {
  id: number;
  name: string;
  description: string;
  vehicle: string;
  review: {
    rating: number;
    comment: string;
  };
  value: number;
  rate_per_km: string;
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
