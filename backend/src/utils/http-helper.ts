import * as HttpResponse from "../models/http-response-model";

export const ok = async (data: any): Promise<HttpResponse.SuccessResponse> => {
  return {
    statusCode: 200,
    body: data,
  };
};

export const notDriver = async (errorCode: string, errorDescription: string): Promise<HttpResponse.CustomErro> => {
  return {
    name: "notDriver",
    message: "Driver not found",
    statusCode: 404,
    body: {
      error_code: errorCode,
      error_description: errorDescription,
    },
  };
};
export const notKm = async (errorCode: string, errorDescription: string): Promise<HttpResponse.CustomErro> => {
  return {
    name: "notKm",
    message: "Km not found",
    statusCode: 406,
    body: {
      error_code: errorCode,
      error_description: errorDescription,
    },
  };
};
export const BadRequest = async (errorCode: string, errorDescription: string): Promise<HttpResponse.NotFound> => {
  return {
    statusCode: 400,
    body: {
      error_code: errorCode,
      error_description: errorDescription,
    },
  };
};
export const invalidDriver = async (errorCode: string, errorDescription: string): Promise<HttpResponse.NotFound> => {
  return {
    statusCode: 400,
    body: {
      error_code: errorCode,
      error_description: errorDescription,
    },
  };
};
export const ridesDound = async (errorCode: string, errorDescription: string): Promise<HttpResponse.NotFound> => {
  return {
    statusCode: 404,
    body: {
      error_code: errorCode,
      error_description: errorDescription,
    },
  };
};
