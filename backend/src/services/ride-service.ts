import { RideConfirmModel, RideModel } from "../models/ride-model";
import * as RideRepository from "../repositories/ride-repository";
import * as HttpResponse from "../utils/http-helper";

export const rideEstimateService = async (ride: RideModel) => {
  try {
    if (Object.keys(ride).length === 0) throw new Error();
    if (!ride?.customer_id || ride.customer_id.trim() === "") throw new Error();
    if (!ride?.origin || ride.origin.trim() === "") throw new Error();
    if (!ride?.destination || ride.destination.trim() === "") throw new Error();
    if (ride?.origin.trim().toLowerCase() === ride.destination.trim().toLowerCase()) throw new Error();
    const data = await RideRepository.rideEstimate(ride);
    return await HttpResponse.ok(data);
  } catch (error) {
    return await HttpResponse.BadRequest("INVALID_DATA", "Os dados fornecidos no corpo da requisição são inválidos");
  }
};
export const rideConfirmService = async (ride: RideConfirmModel) => {
  try {
    if (Object.keys(ride).length === 0) throw new Error();
    if (!ride?.customer_id || ride.customer_id.trim() === "") throw new Error();
    if (!ride?.origin || ride.origin.trim() === "") throw new Error();
    if (!ride?.destination || ride.destination.trim() === "") throw new Error();
    if (ride?.origin.trim().toLowerCase() === ride.destination.trim().toLowerCase()) throw new Error();
    // opção de validação de motorista
    // km validar
    const data = await RideRepository.rideEstimate(ride);
    return await HttpResponse.ok(data);
  } catch (error) {
    return await HttpResponse.BadRequest("INVALID_DATA", "Os dados fornecidos no corpo da requisição são inválidos");
  }
};

export const getRideByIdService = async (customerId: String, driverId: number | undefined) => {
  const data = await RideRepository.findRideById(customerId, driverId);

  let response = null;

  if (data) {
    response = await HttpResponse.ok(data);
  } else {
    response = await HttpResponse.BadRequest("RIDE_NOT_FOUND", "Ride not found for the given IDs");
  }
  return response;
};
