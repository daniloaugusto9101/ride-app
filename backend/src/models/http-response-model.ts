export interface SuccessResponse {
  statusCode: number;
  body: any;
}
export interface ErrorResponse {
  statusCode: number;
  body: {
    error_code: string;
    error_description: string;
  };
}
