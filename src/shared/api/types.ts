export interface ApiResponse<T> {
  data: T;
  isLoading: boolean;
  isError: boolean;
}

export interface MetaParams {
  page?: number;
  limit?: number;
}

export interface MetaOptions {
  count: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface ApiResponseWithMeta<T> extends ApiResponse<T> {
  meta: MetaOptions;
}
