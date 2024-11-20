import { RideModel } from "../models/ride-model";
import * as RideRepository from "../repositories/ride-repository";
import * as HttpResponse from "../utils/http-helper";

export const calculateRideService = async (ride: RideModel) => {
  let response = null;
  if (Object.keys(ride).length !== 0) {
    const data = await RideRepository.calculateRide(ride);
    response = await HttpResponse.ok(data);
  } else {
    response = await HttpResponse.noContent();
  }
  return response;
};
