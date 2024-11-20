export interface ErrorResponse {
  statusCode: number;
  body: {
    error_code: string;
    error_description: string;
  };
}
