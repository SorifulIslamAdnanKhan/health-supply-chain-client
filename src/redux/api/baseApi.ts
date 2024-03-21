import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://smart-health-supply-chain-server.vercel.app/api/v1",
    credentials: "include",
  }),
  tagTypes: ["supplies", "volunteers", "testimonials", "comments"],
  endpoints: () => ({}),
});
