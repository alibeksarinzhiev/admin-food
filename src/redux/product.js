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
        addProduct:build.mutation({
            query:(produdct)=>({
                url:`product`,
                method:'POST',
                body:produdct
            })
        }),

        getOneProduct:build.query({
            query:(id)=> ({url:`product/${id}`})
        }),
        deleteProduct:build.mutation({
            query:(id)=> ({
                url:`product/${id}`,
                method: 'DELETE',
            })
        })
    })
})
export const {useGetProductQuery,useChangeProductMutation,useGetOneProductQuery,useAddProductMutation,useDeleteProductMutation} = productSlice