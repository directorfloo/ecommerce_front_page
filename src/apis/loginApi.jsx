import {createApi, fetchBaseQuery} from  "@reduxjs/toolkit/query/react"
const URL = import .meta.env.VITE_APP_FAKESTORE_URL

export const  LoginApi = createApi({
       reducerPath:"login",
       baseQuery:fetchBaseQuery({baseUrl:"https://dummyjson.com"}),
       endpoints:(builder)=>({
        login:builder.mutation({
           query:(data)=>({
            url:"/auth/login",
            method:"POST",
            body: data

           })

        })
       })

})
export const {useLoginMutation} = LoginApi;