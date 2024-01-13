import { IGetPagingData, IGetPagingQuery } from '../../common/types/api';
import { IFolder } from '../../common/types/folder';
import { urlQueryBuilder } from '../../common/utils/url-query-builder';
import { api } from '../apiSlice';

export async function getFoldersApi(
  params: IGetPagingQuery,
): Promise<IGetPagingData<IFolder>> {
  const query = urlQueryBuilder(params);
  const res = await api.get(`folders?${query}`);
  const total = parseInt(res.headers['x-total-count'], 10);
  if (isNaN(total)) {
    throw new Error(
      'The X-Total-Count header is missing in the HTTP Response. The jsonServer Data Provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare X-Total-Count in the Access-Control-Expose-Headers header?',
    );
  }
  return {
    data: res.data,
    total,
  };
}
