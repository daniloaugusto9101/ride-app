import * as HttpResponse from "../utils/http-helper";

export const calculateRideService = async () => {
  const data = {
    player: "Danilo",
  };

  let response = null;

  if (data) {
    response = await HttpResponse.ok(data);
  } else {
    response = await HttpResponse.noContent();
  }
  return response;
};
