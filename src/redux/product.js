import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:1337/api/`}),
  endpoints: (builder) => ({
    getproductByName: builder.query({
      query: (name) => `${name}`,
    }),
  }),
})

export const { useGetproductByNameQuery } = productApi

      