import { configureStore } from '@reduxjs/toolkit';
import sortSlice from '../features/sort-tickets/sortSlice';
import tabsSlice from '../features/tabsSlice/tabsSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { ticketsApi } from '../features/api/api-service';

export const store = configureStore({
  reducer: {
    sort: sortSlice,
    tabs: tabsSlice,
    [ticketsApi.reducerPath]: ticketsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(ticketsApi.middleware),
  devTools: {
    stateSanitizer: (state) => (state.data ? { ...state, data: '<<LONG_BLOB>>' } : state),
  },
});

setupListeners(store.dispatch);
