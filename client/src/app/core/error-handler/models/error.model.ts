export interface ErrorResponse {
  timestamp: string;
  path: string;
  message: string;
  requestId: string;
  code: number;
  errors: Error[];
}

export interface Error {
  message: string;
  type: string;
  lang: string;
}
