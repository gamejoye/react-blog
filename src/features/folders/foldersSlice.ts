import { apiSlice } from '../apiSlice';

export const foldersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFoldersTotalCount: builder.query<number, void>({
      query: () => 'folders/count',
    }),
  }),
});

export const { useGetFoldersTotalCountQuery } = foldersApiSlice;
