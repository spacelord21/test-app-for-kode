import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "./CONSTANT";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
  endpoints: (build) => ({
    getUsers: build.query({
      query: (category) => ({
        url: "users",
        params: {
          __example: category,
        },
      }),
      transformResponse: (response) => response.items,
    }),
  }),
  refetchOnReconnect: true,
  keepUnusedDataFor: 300,
});

export const { useGetUsersQuery } = usersApi;
