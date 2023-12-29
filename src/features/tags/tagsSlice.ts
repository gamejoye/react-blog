import { ITag } from '../../common/types/tag';
import { apiSlice } from '../apiSlice';

type TagsResponse = ITag[];

export const tagsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTags: builder.query<TagsResponse, void>({
      query: () => 'tags',
    }),
  }),
});

export const { useGetTagsQuery } = tagsApiSlice;
