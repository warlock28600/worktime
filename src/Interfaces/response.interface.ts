export interface ResponseInterface<T> {
  success: boolean;
  data: T;
  message?: string;
}