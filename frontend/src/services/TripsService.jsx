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
    customer_id: customerId,
    origin: origin,
    destination: destination,
  };
  const { data } = await api.post(recurso, body);
  return data;
};
const searchRideConfirm = async (object) => {
  const recurso = `ride/confirm`;
  const body = {
    customer_id: object.customer_id,
    origin: object.origin,
    destination: object.destination + "2",
    distance: object.distance,
    duration: object.duration,
    driver: {
      id: object.driver.id,
      name: object.driver.name,
    },
    value: object.value,
  };
  const { data } = await api.patch(recurso, body);
  return data;
};

export default {
  searchTrips,
  searchRides,
  searchRideConfirm,
};
