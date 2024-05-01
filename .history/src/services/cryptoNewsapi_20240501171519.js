import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoNewsHeaders = {
    'X-RapidAPI-Key': '43115d58eamsh723d92b814c59b3p183d84jsn8f471e739f7d',
    'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
  }

  const baseUrl = 'https://cryptocurrency-news2.p.rapidapi.com'

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