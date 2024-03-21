import { baseApi } from "@/redux/api/baseApi";

export const testimonialApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createtTestimonial: builder.mutation({
      query: (data) => ({
        url: "/testimonial",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["testimonials"],
    }),
    getAllTestimonials: builder.query({
      query: () => ({
        url: "/testimonial",
        method: "GET",
      }),
      providesTags: ["testimonials"],
    }),
  }),
});

export const { useCreatetTestimonialMutation, useGetAllTestimonialsQuery } =
  testimonialApi;
