import { api } from "../config/http";

const searchTrips = async (customerId, driverId) => {
  const recurso = `ride/${customerId}`;
  const params = {
    driver_id: driverId || null,
  };
  const { data } = await api.get(`${recurso}`, { params });
  return data;
};
const searchRides = async (customerId, origin, destination) => {
  const recurso = `ride/estimate`;
  const body = {
    customer_id: "123",
    origin: "origin",
    destination: "destination",
  };
  const { data } = await api.post(recurso, body);
  return data;
};

export default {
  searchTrips,
  searchRides,
};
