export type IGetPagingQuery = {
  _start: number;
  _end: number;
  _sort: string;
  _order: 'ASC' | 'DESC';
};

export type IGetBlogsQuery = {
  q?: string;
}

export type IGetPagingData<T> = {
  data: T[];
  total: number;
}

export type IResponse<T> = {
  code: number;
  data: T;
  success: boolean;
}
