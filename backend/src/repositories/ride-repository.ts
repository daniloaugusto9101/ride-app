import { PrismaClient } from "@prisma/client";
import { DriveModel, RideBasicResponseModel, RideConfirmModel, RideConfirmResposeModel, RideModel, RideResponseModel, TripsModel } from "../models/ride-model";

const prisma = new PrismaClient();

const dataRideBasicResponse: RideBasicResponseModel = {
  origin: {
    latitude: -23.55052,
    longitude: -46.633308,
  },
  destination: {
    latitude: -22.906847,
    longitude: -43.172896,
  },
  distance: 429,
  duration: "6h 30m",

  routeResponse: {
    status: "OK",
    routes: [
      {
        summary: "Via BR-116",
        legs: [
          {
            distance: { text: "429 km", value: 429000 },
            duration: { text: "6 horas 30 minutos", value: 23400 },
            start_location: { lat: -23.55052, lng: -46.633308 },
            end_location: { lat: -22.906847, lng: -43.172896 },
          },
        ],
      },
    ],
  },
};

const dataDriver: DriveModel[] = [
  {
    id: 1,
    name: "Homer Simpson",
    description: "Olá! Sou o Homer, seu motorista camarada! Relaxe e aproveite o passeio, com direito a rosquinhas e boas risadas (e talvez alguns desvios).",
    vehicle: "Plymouth Valiant 1973 rosa e enferrujado",
    review: {
      rating: 2,
      comment: "Motorista simpático, mas errou o caminho 3 vezes. O carro cheira a donuts.",
    },
    value: 1,
    rate_per_km: "R$ 2,50/km",
  },
  {
    id: 2,
    name: "Dominic Toretto",
    description: "Ei, aqui é o Dom. Pode entrar, vou te levar com segurança e rapidez ao seu destino. Só não mexa no rádio, a playlist é sagrada.",
    vehicle: "Dodge Charger R/T 1970 modificado",
    review: {
      rating: 4,
      comment: "Que viagem incrível! O carro é um show à parte e o motorista, apesar de ter uma cara de poucos amigos, foi super gente boa. Recomendo!",
    },
    value: 5,
    rate_per_km: "R$ 5,00/km",
  },
  {
    id: 3,
    name: "James Bond",
    description: "Boa noite, sou James Bond. À seu dispor para um passeio suave e discreto. Aperte o cinto e aproveite a viagem.",
    vehicle: "Aston Martin DB5 clássico",
    review: {
      rating: 5,
      comment: "Serviço impecável! O motorista é a própria definição de classe e o carro é simplesmente magnífico. Uma experiência digna de um agente secreto.",
    },
    value: 10,
    rate_per_km: "R$ 10,00/km",
  },
];

export const rideEstimate = async (ride: RideModel): Promise<RideResponseModel> => {
  const drivers = dataDriver.filter((driver) => driver.value >= Number(ride.destination));
  return {
    ...dataRideBasicResponse,
    options: drivers.length > 0 ? drivers : [dataDriver[0]],
  };
};

export const rideConfirm = async (ride: RideConfirmModel): Promise<RideConfirmResposeModel | []> => {
  try {
    await prisma.ride.create({
      data: {
        customerId: ride.customer_id,
        origin: ride.origin,
        destination: ride.destination,
        distance: ride.distance,
        duration: ride.duration,
        value: ride.value,
        driverId: ride.driver.id,
        driverName: ride.driver.name,
      },
    });
    return {
      success: true,
    };
  } catch (error) {
    return [];
  }
};

export const rideCustomerId = async (customerId: string, driverId: number | undefined): Promise<TripsModel | []> => {
  try {
    const data = await prisma.ride.findMany({
      where: {
        customerId,
        ...(driverId !== undefined && { driverId }),
      },
    });
    console.log(data);
    return {
      customer_id: String(customerId),
      rides: data.map((ride) => ({
        id: Number(ride.id),
        date: new Date(),
        origin: ride.origin,
        destination: ride.destination,
        distance: ride.distance,
        duration: ride.duration,
        driver: {
          id: ride.driverId,
          name: ride.driverName,
        },
        value: ride.value,
      })),
    };
    // return rides;
  } catch (error) {
    console.error("Error fetching rides:", error);
    return [];
  }
};
