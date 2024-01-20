import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://dummyjson.com/";
export const mutationApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      headers.set("Accept", "application/json");
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.mutation({
      query: () => ({
        url: "/products",
        method: "GET",
        // body: products,
      }),
    }),
    getSingleProducts: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
        // body: products,
      }),
    }),
  }),
});

export const { useGetAllProductsMutation, useGetSingleProductsMutation } = mutationApi;
