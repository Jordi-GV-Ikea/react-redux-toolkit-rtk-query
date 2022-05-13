import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `users`,
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;


// REACT_APP_CMS_DATA=http://localhost:8080/app-data
/* const getPages = async ({ market, environment }) => {
  const url = process.env.REACT_APP_CMS_DATA;
  const response = await axios.get(url, {
    params: { market, environment },
  });
  return response;
}; */