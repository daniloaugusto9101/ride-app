import { DriveModel, RideBasicResponseModel, RideModel, RideModelHistory, RideResponseModel } from "../models/ride-model";

// const database: RideModel[] = [
//   {
//     customer_id: "1",
//     origin: "SJC",
//     destination: "SP",
//   },
//   {
//     customer_id: "1",
//     origin: "Jacarei",
//     destination: "SP",
//   },
//   {
//     customer_id: "1",
//     origin: "Caçapava",
//     destination: "SP",
//   },
// ];

// const driver: DriverModel[] = [
//   {
//     id: "1",
//     nome: "Homer Simpson",
//     descricao: "Olá! Sou o Homer, seu motorista camarada! Relaxe e aproveite o passeio, com direito a rosquinhas e boas risadas (e talvez alguns desvios).",
//     carro: "Plymouth Valiant 1973 rosa e enferrujado",
//     avaliacao: "2/5",
//     comentarios: "Motorista simpático, mas errou o caminho 3 vezes. O carro cheira a donuts.",
//     taxaKm: "R$ 2,50/km",
//     kmMinimo: 1,
//   },
//   {
//     id: "2",
//     nome: "Dominic Toretto",
//     descricao: "Ei, aqui é o Dom. Pode entrar, vou te levar com segurança e rapidez ao seu destino. Só não mexa no rádio, a playlist é sagrada.",
//     carro: "Dodge Charger R/T 1970 modificado",
//     avaliacao: "4/5",
//     comentarios: "Que viagem incrível! O carro é um show à parte e o motorista, apesar de ter uma cara de poucos amigos, foi super gente boa. Recomendo!",
//     taxaKm: "R$ 5,00/km",
//     kmMinimo: 5,
//   },
//   {
//     id: "3",
//     nome: "James Bond",
//     descricao: "Boa noite, sou James Bond. À seu dispor para um passeio suave e discreto. Aperte o cinto e aproveite a viagem.",
//     carro: "Aston Martin DB5 clássico",
//     avaliacao: "5/5",
//     comentarios: "Serviço impecável! O motorista é a própria definição de classe e o carro é simplesmente magnífico. Uma experiência digna de um agente secreto.",
//     taxaKm: "R$ 10,00/km",
//     kmMinimo: 10,
//   },
// ];

const databaseHistory: RideModelHistory = {
  customer_id: "12345",
  rides: [
    {
      id: 1,
      date: new Date(),
      origin: "Location A",
      destination: "Location B",
      distance: 10,
      duration: "15 mins",
      driver: {
        id: 1,
        name: "Driver A",
      },
      value: 20,
    },
    {
      id: 2,
      date: new Date(),
      origin: "Location C",
      destination: "Location D",
      distance: 20,
      duration: "30 mins",
      driver: {
        id: 2,
        name: "Driver B",
      },
      value: 40,
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

export const findRideById = async (customerId: String, driverId: number | undefined): Promise<RideModelHistory | undefined> => {
  if (databaseHistory.customer_id === customerId) {
    return databaseHistory;
  }
  return undefined;
};
