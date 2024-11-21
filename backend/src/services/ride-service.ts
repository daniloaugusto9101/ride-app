import { RideModel } from "../models/ride-model";
import * as RideRepository from "../repositories/ride-repository";
import * as HttpResponse from "../utils/http-helper";

export const calculateRideService = async (ride: RideModel) => {
  let response = null;
  if (Object.keys(ride).length !== 0) {
    const data = await RideRepository.calculateRide(ride);
    response = await HttpResponse.badRequest(); //verificar
  } else {
    response = await HttpResponse.badRequest();
  }
  return response;
};

export const getRideByIdService = async (customerId: String, driverId: number | undefined) => {
  const data = await RideRepository.findRideById(customerId, driverId);

  let response = null;

  if (data) {
    response = await HttpResponse.ok(data);
  } else {
    response = await HttpResponse.badRequest();
  }
  return response;
};
