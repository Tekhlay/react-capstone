/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';
import cryptoSlice from './crypto/crypto';

const store = configureStore({
  reducer: {
    cryptoData: cryptoSlice,
  },
});

export default store;
