import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import React from 'react'

const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '43115d58eamsh723d92b814c59b3p183d84jsn8f471e739f7d',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  }

  const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders })


export const cryptoNewsapi = () => {
  return (
    <div>cryptoNewsapi</div>
  )
}

