import { IGetPagingData, IGetPagingQuery } from '../../common/types/api';
import { ITag } from '../../common/types/tag';
import { urlQueryBuilder } from '../../common/utils/url-query-builder';
import { api } from '../apiSlice';

export async function getTagsApi(
  params: IGetPagingQuery,
): Promise<IGetPagingData<ITag>> {
  const query = urlQueryBuilder(params);
  const res = await api.get(`tags?${query}`);
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
