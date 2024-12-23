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
    if (Object.keys(ride).length === 0) throw await HttpResponse.BadRequest("INVALID_DATA", "Os dados fornecidos no corpo da requisição são inválidos");
    if (!ride?.customer_id || ride.customer_id.trim() === "") throw await HttpResponse.BadRequest("INVALID_DATA", "Os dados fornecidos no corpo da requisição são inválidos");
    if (!ride?.origin || ride.origin.trim() === "") throw await HttpResponse.BadRequest("INVALID_DATA", "Os dados fornecidos no corpo da requisição são inválidos");
    if (!ride?.destination || ride.destination.trim() === "") throw await HttpResponse.BadRequest("INVALID_DATA", "Os dados fornecidos no corpo da requisição são inválidos");
    if (ride?.origin.trim().toLowerCase() === ride.destination.trim().toLowerCase()) throw await HttpResponse.BadRequest("INVALID_DATA", "Os dados fornecidos no corpo da requisição são inválidos");
    if (!ride?.driver) throw await HttpResponse.notDriver("DRIVER_NOT_FOUND", "Motorista não encontrado");
    if (!ride?.distance) throw await HttpResponse.notKm("INVALID_DISTANCE", "Quilometragem inválida para o motorista");
    const data = await RideRepository.rideConfirm(ride);
    if (data.length === 0) throw await HttpResponse.BadRequest("INVALID_DATA", "Os dados fornecidos no corpo da requisição são inválidos");
    return await HttpResponse.ok(data);
  } catch (error) {
    return error;
  }
};

export const rideCustomerIdService = async (customerId: String, driverId: number | undefined) => {
  try {
    if (!customerId || customerId.trim() === "") throw await HttpResponse.invalidDriver("NO_RIDES_FOUND", "Nenhum registro encontrado");
    if (driverId !== undefined && (typeof driverId !== "number" || Number.isNaN(driverId))) throw await HttpResponse.invalidDriver("INVALID_DRIVER", "Motorista invalido");
    if (driverId == 4) {
      driverId = undefined;
    }
    const data = await RideRepository.rideCustomerId(customerId, driverId);
    if (data.rides.length === 0) throw await HttpResponse.invalidDriver("NO_RIDES_FOUND", "Nenhum registro encontrado");
    return await HttpResponse.ok(data);
  } catch (error) {
    return error;
  }
};
