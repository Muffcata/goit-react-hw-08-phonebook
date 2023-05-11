import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from 'redux/auth/authSlice';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { contactsReducer } from './tasks/contactsSlice';
import { filterReducer } from './tasks/filterSlice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
  version: 1,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
