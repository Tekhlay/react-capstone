/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetchCrypto = createAsyncThunk(
  'crypto/fetchCrypto',
  async () => {
    const response = await fetch('https://api.coinstats.app/public/v1/coins/');
    const data = await response.json();
    return data.coins;
  },
);

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    isLoding: false,
    crypto: [],
    isEror: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCrypto.pending, (state) => {
      state.isLoding = true;
    });
    builder.addCase(fetchCrypto.fulfilled, (state, action) => {
      state.isLoding = false;
      state.crypto = action.payload;
    });
    builder.addCase(fetchCrypto.rejected, (state) => {
      state.isLoding = false;
      state.isEror = true;
    });
  },
});

export { fetchCrypto };
export default cryptoSlice.reducer;
