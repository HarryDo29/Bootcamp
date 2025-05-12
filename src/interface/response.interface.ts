export interface StandardResponse<T> {
  message: string | string[];
  status: number;
  data?: T;
  error?: string;
}
