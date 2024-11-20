interface RideModel {
  id: number;
  name: string;
}

const database: RideModel[] = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Smith Doe" },
];

export const calculateRide = async (): Promise<RideModel[]> => {
  return database;
};
