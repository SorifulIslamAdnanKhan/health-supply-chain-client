import { baseApi } from "@/redux/api/baseApi";

export const commentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    postComment: builder.mutation({
      query: (data) => ({
        url: "/comment",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["comments"],
    }),
    getAllComments: builder.query({
      query: () => ({
        url: "/comment",
        method: "GET",
      }),
      providesTags: ["comments"],
    }),
  }),
});

export const { usePostCommentMutation, useGetAllCommentsQuery } = commentApi;
