import { api } from "../config/http";

const searchTrips = async (customerId, driverId) => {
  const recurso = `ride/${customerId}`;
  const params = {
    driver_id: driverId || null,
  };
  const { data } = await api.get(`${recurso}`, { params });
  return data;
};

export default {
  searchTrips,
};
