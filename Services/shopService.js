import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { base_url } from '../Firebase/database'

export const shopApi = createApi({
    reducerPath: "shopApi",
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
            return transformedResponse;
          },
        })
    })
})

export const { useGetProductsQuery, useGetCategoriesQuery, useGetProductsByCategoryQuery, usePostOrderMutation, useGetOrdersByUserQuery } = shopApi