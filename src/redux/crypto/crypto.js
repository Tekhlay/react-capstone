/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetchCrypto = createAsyncThunk(
  'crypto/fetchCrypto',
  async () => {
    const response = await fetch('https://api.coinstats.app/public/v1/coins/');
    const data = await response.json();
    const coins = data.coins.map((coin) => ({
      id: coin.id,
      icon: coin.icon,
      name: coin.name,
      symbol: coin.symbol,
      rank: coin.rank,
      price: coin.price,
      volume: coin.volume,
      marketCap: coin.marketCap,
      availableSupply: coin.availableSupply,
      totalSupply: coin.totalSupply,
      pricechange1h: coin.priceChange1h,
      pricechange1d: coin.priceChange1d,
      pricechange1w: coin.priceChange1w,
      url: coin.websiteUrl,
      show: false,

    }));
    return coins;
  },
);

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    isLoding: false,
    crypto: [],
    isEror: false,
  },
  reducers: {
    getdetails: (state, action) => {
      const id = action.payload;
      state.crypto = state.crypto.map((coin) => {
        if (coin.id === id) {
          coin.show = true;
        } else {
          coin.show = false;
        }
        return coin;
      });
    },
  },
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

export const { getdetails } = cryptoSlice.actions;
export { fetchCrypto };
export default cryptoSlice.reducer;
