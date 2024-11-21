import { RideModel, RideModelHistory } from "../models/ride-model";

const database: RideModel[] = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Smith Doe2" },
];

const databaseHistory: RideModelHistory = {
  customer_id: "12345",
  rides: [
    {
      id: 1,
      date: new Date(),
      origin: "Location A",
      destination: "Location B",
      distance: 10,
      duration: "15 mins",
      driver: {
        id: 1,
        name: "Driver A",
      },
      value: 20,
    },
    {
      id: 2,
      date: new Date(),
      origin: "Location C",
      destination: "Location D",
      distance: 20,
      duration: "30 mins",
      driver: {
        id: 2,
        name: "Driver B",
      },
      value: 40,
    },
  ],
};

export const calculateRide = async (ride: RideModel): Promise<RideModel[]> => {
  return database;
};

export const findRideById = async (customerId: String, driverId: number | undefined): Promise<RideModelHistory | undefined> => {
  if (databaseHistory.customer_id === customerId) {
    return databaseHistory;
  }
  return undefined;
};
