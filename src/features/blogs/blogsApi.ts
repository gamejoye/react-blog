import { IGetBlogsQuery, IGetPagingData, IGetPagingQuery } from "../../common/types/api";
import { IBlog } from "../../common/types/blog";
import { api } from "../apiSlice";

export async function getBlogsApi(
  params: IGetPagingQuery & IGetBlogsQuery
): Promise<IGetPagingData<IBlog>> {
  const query = Object.entries(params).map(([key, value]) => `${key}=${value}`).join('&');
  const res = await api.get(`blogs?${query}`);
  const total = parseInt(res.headers['x-total-count'], 10);
  if (isNaN(total)) {
    throw new Error(
      'The X-Total-Count header is missing in the HTTP Response. The jsonServer Data Provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare X-Total-Count in the Access-Control-Expose-Headers header?'
    );
  }
  return {
    data: res.data,
    total,
  };
}