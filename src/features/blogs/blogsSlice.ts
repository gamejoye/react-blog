import { IBlog } from '../../common/types/blog';
import { apiSlice } from '../apiSlice';

export const blogsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: builder.query<IBlog[], void>({
      query: () => 'blogs',
    }),
    getBlog: builder.query<IBlog, number>({
      query: (id) => `blogs/${id}`,
    }),
    getBlogsTotalCount: builder.query<number, void>({
      query: () => `blogs/count`,
    }),
  }),
});

export const { useGetBlogsQuery, useGetBlogQuery, useGetBlogsTotalCountQuery } = blogsApiSlice;

// export const selectUsersResult = blogsApiSlice.endpoints.getUsers.select()
