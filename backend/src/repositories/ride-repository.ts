import { RideModel, RideModelHistory } from "../models/ride-model";

const database: RideModel[] = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Smith Doe2" },
];

export const calculateRide = async (ride: RideModel): Promise<RideModel[]> => {
  return database;
};

export const findRideById = async (
  customerId: Number,
  driverId: String
): Promise<RideModelHistory | undefined> => {
  return database.find((customer) => customer.id === 1);
};
