import * as HttpResponse from "../models/http-response-model";

export const ok = async (data: any): Promise<HttpResponse.SuccessResponse> => {
  return {
    statusCode: 200,
    body: data,
  };
};

// export const noContent = async (): Promise<HttpResponse> => {
//   return {
//     statusCode: 204,
//     body: null,
//   };
// };

export const badRequest = async (): Promise<HttpResponse.ErrorResponse> => {
  return {
    statusCode: 400,
    body: {
      error_code: "INVALID_DATA",
      error_description:
        "Os dados fornecidos no corpo da requisição são inválidos",
    },
  };
};
