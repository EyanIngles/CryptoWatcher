import { configureStore } from '@reduxjs/toolkit'

import { cryptoApi } from '../services/cryptoApi';

export default configureStore ({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
        serializableCheck: false
    })
});

import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './features/cryptoApiSlice';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
