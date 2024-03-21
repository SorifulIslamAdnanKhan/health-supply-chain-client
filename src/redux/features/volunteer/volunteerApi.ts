import { baseApi } from "@/redux/api/baseApi";

export const volunteerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createVolunteer: builder.mutation({
      query: (data) => ({
        url: "/volunteer",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["volunteers"],
    }),
    getAllVolunteers: builder.query({
      query: () => ({
        url: "/volunteer",
        method: "GET",
      }),
      providesTags: ["volunteers"],
    }),
  }),
});

export const { useCreateVolunteerMutation, useGetAllVolunteersQuery } =
  volunteerApi;
