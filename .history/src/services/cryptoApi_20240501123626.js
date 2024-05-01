import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
import { create } from 'domain'


const cryptoApiHeaders = {
    'X-RapidAPI-Key': '43115d58eamsh723d92b814c59b3p183d84jsn8f471e739f7d',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = https://coinranking1.p.rapidapi.com/coins

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi ({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/exchanges')
        })
    })
})
