import { IBlog } from '../../common/types/blog';
import { apiSlice } from '../apiSlice';

type BlogsResponse = IBlog[];
type BlogResponse = IBlog;

export const blogsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: builder.query<BlogsResponse, void>({
      query: () => 'blogs',
    }),
    getBlog: builder.query<BlogResponse, number>({
      query: (id) => `blogs/${id}`,
    }),
  }),
});

export const { useGetBlogsQuery, useGetBlogQuery } = blogsApiSlice;

// export const selectUsersResult = blogsApiSlice.endpoints.getUsers.select()
