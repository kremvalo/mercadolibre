import { configureStore, combineReducers, ThunkAction, Action } from '@reduxjs/toolkit';
import ItemsSlice from '../../components/containers/itemlistContent/slice';
import ItemSelectedSlice from '../../pages/detailPage/slice';

const rootReducer = combineReducers({
  itemsState: ItemsSlice,
  itemSelectedState: ItemSelectedSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
