import { configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from '../services/cryptoApi';
import { cryptonewsApi } from '../services/cryptoApi';

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptonewsApi.reducerPath]: cryptoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware),
});
