export interface SuccessResponse {
  statusCode: number;
  body: any;
}
export interface NotFound {
  statusCode: number;
  body: {
    error_code: string;
    error_description: string;
  };
}
export interface InternalServerErro {
  statusCode: number;
  body: {
    error_code: string;
    error_description: string;
  };
}
