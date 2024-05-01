import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'


const cryptoApiHeaders = {
    'X-RapidAPI-Key': '43115d58eamsh723d92b814c59b3p183d84jsn8f471e739f7d',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseURL = {
    'https://coinranking1.p.rapidapi.com/coins'
}
//const axios = require('axios');
//
//const options = {
//  method: 'GET',
//  url: 'https://coinranking1.p.rapidapi.com/coins',
//  params: {
//    referenceCurrencyUuid: 'yhjMzLPhuIDl',
//    timePeriod: '24h',
//    'tiers[0]': '1',
//    orderBy: 'marketCap',
//    orderDirection: 'desc',
//    limit: '50',
//    offset: '0'
//  },
//  headers: {
//    'X-RapidAPI-Key': '43115d58eamsh723d92b814c59b3p183d84jsn8f471e739f7d',
//    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//  }
//};