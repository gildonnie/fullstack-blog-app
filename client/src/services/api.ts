import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Api } from '../types';

export const postsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/blog' }),
  tagTypes: ['Api'],
  endpoints: (builder) => ({
    getPosts: builder.query<Api, undefined>({
      query: () => '/posts',
      providesTags: ['Api'],
    }),
    updatePost: builder.mutation<Api, { id: string; title: string;
        content: string;
        category?: string; }>({
          query: (
            {
              id, title, content, category,
            },
          ) => ({
            url: `posts/${id}`,
            method: 'PUT',
            body: {
              id, title, content, category,
            },
          }),
        }),
  }),
});

// Export hooks for usage in functional components
export const { useGetPostsQuery, useUpdatePostMutation } = postsApi;
