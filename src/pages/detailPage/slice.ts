import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ServiceApi } from '../../core/services/serviceApi/serviceApi';
import { Item } from '../../core/services/types';

interface InitialProps{
  itemSelected: Item | null
}

export const initialState: InitialProps = {
  itemSelected: null,
};

export const getItemAsync = createAsyncThunk(
  'itemSelected/getItem',
  async (idItem: string) => {
    console.log(`recibi a idItem: ${idItem}`)
    const api = ServiceApi.getInstance();
    const respGetItem = api.getItem(idItem);
    const respDescription = api.getItemDescription(idItem);

    (await respGetItem).description = (await respDescription).plainText
    return respGetItem;
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
