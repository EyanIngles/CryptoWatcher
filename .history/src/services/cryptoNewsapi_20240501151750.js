import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import React from 'react'

const cryptoNews = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '43115d58eamsh723d92b814c59b3p183d84jsn8f471e739f7d',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  }

  const cryptoNewsUrl = 'https://bing-news-search1.p.rapidapi.com'

export const cryptoNewsapi = () => {
  return (
    <div>cryptoNewsapi</div>
  )
}

