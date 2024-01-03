import { apiSlice } from '../apiSlice';

export const tagsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTagsTotoalCount: builder.query<number, void>({
      query: () => 'tags/count',
    }),
  }),
});

export const { useGetTagsTotoalCountQuery } = tagsApiSlice;
