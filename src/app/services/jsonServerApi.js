import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const jsonServerApi = createApi({
  reducerPath: "books",
  //All of our requests will have URLs starting with '/http://localhost:5000'
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["books"],
  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    getBooks: builder.query({
      //By default ,query endpoints will use a GET HTTP request, but we can override that by returning an object like below
      query: () => ({
        url: "books",
        method: "GET",
      }),
      providesTags: ["books"],
    }),
    createBook: builder.mutation({
      query: ({ name, author }) => ({
        url: `books`,
        method: "POST",
        body: { name, author },
      }),
      invalidatesTags: ["books"],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
    }),
    updateBook: builder.mutation({
      query: ({ id, name, author }) => ({
        url: `books/${id}`,
        method: "PUT",
        body: { name, author },
      }),
      invalidatesTags: ["books"],
    }),
  }),
});
export const { useGetBooksQuery, useCreateBookMutation,useDeleteBookMutation,useUpdateBookMutation } = jsonServerApi;