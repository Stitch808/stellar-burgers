import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TOrder } from '@utils-types';
<<<<<<< HEAD
import { getFeedsApi } from '../../utils/burger-api';
=======
import { getFeedsApi } from '@api';
>>>>>>> 1f534b5f7b255a7d9f8dc23735cd38d4d440987c

export const getFeeds = createAsyncThunk('orders/get', async () => {
  const getFeed = getFeedsApi();
  return getFeed;
});

<<<<<<< HEAD
export type TFeedSlice = {
=======
type TFeedSlice = {
>>>>>>> 1f534b5f7b255a7d9f8dc23735cd38d4d440987c
  orders: TOrder[];
  isLoading: boolean;
  error: string | null;
  feed: {
    total: number;
    totalToday: number;
  };
};

<<<<<<< HEAD
export const initialState: TFeedSlice = {
=======
const initialState: TFeedSlice = {
>>>>>>> 1f534b5f7b255a7d9f8dc23735cd38d4d440987c
  orders: [],
  isLoading: false,
  error: null,
  feed: {
    total: 0,
    totalToday: 0
  }
};

export const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {},
  selectors: {
    changeOrders: (state) => state.orders,
    changeFeeds: (state) => state.feed
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFeeds.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getFeeds.rejected, (state, action) => {
        state.isLoading = false;
<<<<<<< HEAD
        state.error = 'Ошибка загрузки';
=======
        state.error = action.error.message as string;
>>>>>>> 1f534b5f7b255a7d9f8dc23735cd38d4d440987c
      })
      .addCase(getFeeds.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orders = action.payload.orders;
        state.feed.total = action.payload.total;
        state.feed.totalToday = action.payload.totalToday;
      });
  }
});

export default feedSlice.reducer;
export const feedSliceName = feedSlice.name;
export const { changeFeeds, changeOrders } = feedSlice.selectors;
