import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ServiceApi } from '../../../core/services/serviceApi/serviceApi';
import { Item } from '../../../core/services/types/item.types';

interface InitialProps{
  items: Item[] | null
}

export const initialState: InitialProps = {
  items: null,
};

export const getItemsAsync = createAsyncThunk(
  'items/getItems',
  async (query: string) => {
    const api = ServiceApi.getInstance();
    return api.getItems(query);
  },
);

export const ItemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getItemsAsync.fulfilled, (state, action) => {
        state.items = action.payload;
      });
  },
});

export default ItemsSlice.reducer;
