import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { base_url } from '../Firebase/database'

export const shopApi = createApi({
    reducerPath: "shopApi",
    tagTypes: ["profileImageGet"],
    baseQuery: fetchBaseQuery({baseUrl: base_url}),
    endpoints: (builder)=>({
        getProducts: builder.query({
            query: () => 'products.json'
        }),
        getCategories: builder.query({
            query: () => 'categories.json'
        }),
        getProductsByCategory: builder.query({
            query: (category) =>
              `products.json?orderBy="category"&equalTo="${category}"`,
            transformResponse: (res) => {
              const transformedResponse = Object.values(res);
              return transformedResponse;
            },
          }),
        postOrder: builder.mutation({
            query: ({...order}) => ({
              url: 'orders.json',
              method: 'POST',
              body: order,
            })
        }),
        getOrdersByUser: builder.query({
          query: (user) => 
            `orders.json?orderBy="user"&equalTo="${user}"`,
          transformResponse: (res) => {
            const transformedResponse = Object.values(res);
            const parseDate = (dateString) => {
              const [datePart, timePart] = dateString.split(' ');
              const [day, month, year] = datePart.split('/').map(Number);
              const [hours, minutes, seconds] = timePart.split(':').map(Number);
              return new Date(year, month - 1, day, hours, minutes, seconds);
            };
            transformedResponse.sort((a, b) => parseDate(b.createdAt) - parseDate(a.createdAt));
            return transformedResponse;
          },
        }),
        getProfileimage: builder.query({
          query: (localId) => `profileImages/${localId}.json`,
          providesTags: ["profileImageGet"],
        }),
        postProfileImage: builder.mutation({
          query: ({ image, localId }) => ({
            url: `profileImages/${localId}.json`,
            method: "PUT",
            body: {
              image: image,
            },
          }),
          invalidatesTags: ["profileImageGet"],
        }),
    })
})

export const { 
  useGetProductsQuery, 
  useGetCategoriesQuery, 
  useGetProductsByCategoryQuery, 
  usePostOrderMutation, 
  useGetOrdersByUserQuery,
  useGetProfileimageQuery,
  usePostProfileImageMutation
 } = shopApi