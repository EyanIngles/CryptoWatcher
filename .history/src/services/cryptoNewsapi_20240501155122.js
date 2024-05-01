import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoNewsHeaders = {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '43115d58eamsh723d92b814c59b3p183d84jsn8f471e739f7d',
    'X-RapidAPI-Host': 'google-api31.p.rapidapi.com'
  }

  const baseUrl = 'https://google-api31.p.rapidapi.com/'

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders })

export const cryptoNewsApi = createApi ({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: (newsCategory, count) => createRequest(`NEWS?crypto=${newsCategory}&count=${count}`),
        })
    })
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;