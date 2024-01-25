import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ServiceApi } from '../../core/services/serviceApi/serviceApi';
import { Item } from '../../core/services/types/item.types';

interface InitialProps{
  itemSelected: Item | null
}

export const initialState: InitialProps = {
  itemSelected: null,
};

export const getItemAsync = createAsyncThunk(
  'itemSelected/getItem',
  async (idItem: string) => {
    const api = ServiceApi.getInstance();
    return api.getItem(idItem);
  },
);

export const ItemSelectedSlice = createSlice({
  name: 'itemSelected',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getItemAsync.fulfilled, (state, action) => {
        state.itemSelected = action.payload;
      });
  },
});

export default ItemSelectedSlice.reducer;
