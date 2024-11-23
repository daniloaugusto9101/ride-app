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

// export const Erro404 = async (errorCode: string, errorDescription: string): Promise<HttpResponse.CustomErro> => {
//   return {
//     name: "Erro404",
//     message: "Ocorreu um erro",
//     statusCode: 404,
//     body: {
//       error_code: errorCode,
//       error_description: errorDescription,
//     },
//   };
// };

export const BadRequest = async (errorCode: string, errorDescription: string): Promise<HttpResponse.NotFound> => {
  return {
    statusCode: 400,
    body: {
      error_code: errorCode,
      error_description: errorDescription,
    },
  };
};

// export const InternalServerError = async (errorCode: string, errorDescription: string): Promise<HttpResponse.InternalServerErro> => {
//   return {
//     statusCode: 500,
//     body: {
//       error_code: errorCode,
//       error_description: errorDescription,
//     },
//   };
// };
