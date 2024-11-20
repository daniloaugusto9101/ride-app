import * as RideRepository from "../repositories/ride-repository";
import * as HttpResponse from "../utils/http-helper";

export const calculateRideService = async () => {
  const data = await RideRepository.calculateRide();

  let response = null;

  if (data) {
    response = await HttpResponse.ok(data);
  } else {
    response = await HttpResponse.noContent();
  }
  return response;
};
