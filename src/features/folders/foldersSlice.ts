import { IFolder } from '../../common/types/folder';
import { apiSlice } from '../apiSlice';

type FoldersResponse = IFolder[];

export const foldersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFolders: builder.query<FoldersResponse, void>({
      query: () => 'folders',
    }),
  }),
});

export const { useGetFoldersQuery } = foldersApiSlice;
