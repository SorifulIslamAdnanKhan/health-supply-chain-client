import { baseApi } from "@/redux/api/baseApi";

export const supplyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createSupply: builder.mutation({
      query: (data) => ({
        url: "/supply",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["supplies"],
    }),
    getAllSupplies: builder.query({
      query: () => ({
        url: "/supply",
        method: "GET",
      }),
      providesTags: ["supplies"],
    }),
    deleteSupply: builder.mutation({
      query: (id) => ({
        url: `/supply/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["supplies"],
    }),
    updateSupply: builder.mutation({
      query: ({ id, body }) => ({
        url: `/supply/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["supplies"],
    }),
  }),
});

export const {
  useCreateSupplyMutation,
  useGetAllSuppliesQuery,
  useDeleteSupplyMutation,
  useUpdateSupplyMutation,
} = supplyApi;
