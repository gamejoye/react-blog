import { urlQueryBuilder } from '../../common/utils/url-query-builder';
import { api } from '../apiSlice';
import {
  IGetBlogCommentsRequest,
  IGetBlogCommentsResponse,
  IPostBlogCommentRequest,
  IPostBlogCommentResponse,
} from './types';

export async function getBlogCommentsByBlogIdApi(
  option: IGetBlogCommentsRequest,
): Promise<IGetBlogCommentsResponse> {
  const blogId = option.blogId;
  const queryOption = option.queryOption || {};
  const { timestamp, amount } = queryOption;
  const res = await api.get(
    `blogs/${blogId}/comments?${urlQueryBuilder(
      ['timestamp', timestamp],
      ['amount', amount],
    )}`,
  );
  return res.data;
}

export async function addBlogCommentApi(
  partialComment: IPostBlogCommentRequest,
): Promise<IPostBlogCommentResponse> {
  const blogId = partialComment.blog.id;
  const res = await api.post(`blogs/${blogId}/comments`, partialComment);
  return res.data;
}
