import { DriveModel, RideBasicResponseModel, RideConfirmModel, RideConfirmResposeModel, RideModel, RideResponseModel, TripsModel } from "../models/ride-model";

const dataTrips: TripsModel = {
  customer_id: "12345",
  rides: [
    {
      id: 1,
      date: new Date("2024-11-23T10:00:00"),
      origin: "Rua A, 123, São Paulo",
      destination: "Avenida B, 456, São Paulo",
      distance: 12.5,
      duration: "00:30:45",
      driver: {
        id: 101,
        name: "Carlos Silva",
      },
      value: 45.75,
    },
    {
      id: 2,
      date: new Date("2024-11-23T12:15:00"),
      origin: "Rua X, 789, São Paulo",
      destination: "Rua Y, 101, São Paulo",
      distance: 8.2,
      duration: "00:20:15",
      driver: {
        id: 102,
        name: "Ana Souza",
      },
      value: 32.0,
    },
    {
      id: 3,
      date: new Date("2024-11-23T14:30:00"),
      origin: "Avenida C, 456, São Paulo",
      destination: "Rua D, 789, São Paulo",
      distance: 5.7,
      duration: "00:15:30",
      driver: {
        id: 103,
        name: "José Pereira",
      },
      value: 22.5,
    },
    {
      id: 4,
      date: new Date("2024-11-23T17:45:00"),
      origin: "Rua E, 101, São Paulo",
      destination: "Avenida F, 202, São Paulo",
      distance: 14.3,
      duration: "00:35:00",
      driver: {
        id: 104,
        name: "Maria Oliveira",
      },
      value: 53.2,
    },
  ],
};

const dataRideBasicResponse: RideBasicResponseModel = {
  origin: {
    latitude: -23.55052, // Exemplo: localização de São Paulo
    longitude: -46.633308,
  },
  destination: {
    latitude: -22.906847, // Exemplo: localização do Rio de Janeiro
    longitude: -43.172896,
  },
  distance: 429, // Distância em quilômetros entre São Paulo e Rio de Janeiro
  duration: "6h 30m", // Exemplo de duração estimada

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
  const googleResponse = {
    km: 5,
  };
  const drivers = dataDriver.filter((driver) => driver.value >= googleResponse.km);
  return {
    ...dataRideBasicResponse,
    options: drivers,
  };
};

export const rideConfirm = async (ride: RideConfirmModel): Promise<RideConfirmResposeModel> => {
  if (true) {
    return {
      success: true,
    };
  }
};

export const rideCustomerId = async (customerId: String, driverId: number | undefined): Promise<TripsModel> => {
  console.log("Api backend customerId=>>", customerId);
  console.log("Api backend driverId=>>", driverId);
  return dataTrips;
};
