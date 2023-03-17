import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Breed {
  id: string;
  name: string;
  image: {
    url: string;
  };
}

export const doggieApiSlice = createApi({
  reducerPath: 'dog-api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.DOG_API_URL,
    prepareHeaders(headers) {
      headers.set('x-api-key', process.env.DOG_API_KEY);
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchBreeds: builder.query<Breed[], number | void>({
        query(limit = 10) {
          return `/breeds?limit=${limit}`;
        },
      }),
    };
  },
});

export const { useFetchBreedsQuery } = doggieApiSlice;
