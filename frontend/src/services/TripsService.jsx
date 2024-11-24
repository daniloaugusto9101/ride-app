import { api } from "../config/http";

const getTrips = async (customerId, driverId) => {
  const recurso = `ride/${customerId}`;
  const params = {
    driver_id: driverId,
  };
  const { data } = await api.get(`${recurso}`, { params });
  return data;
};

export default {
  getTrips,
};
