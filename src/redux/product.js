import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const productSlice = createApi({
    reducerPath:'product',
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:8080/'
    }),
    endpoints:(build) =>({
    getProduct:build.query({
        query:(arg)=> 'product'
    }),
        changeProduct:build.mutation({
            query:(product) =>({
                url:`product/${product.id}`,
                method:'PATCH',
                body:product
            })
        }),
        // addproduct
        getOneProduct:build.query({
            query:(id)=> ({url:`product/${id}`})
        })
    })
})
export const {useGetProductQuery,useChangeProductMutation,useGetOneProductQuery} = productSlice