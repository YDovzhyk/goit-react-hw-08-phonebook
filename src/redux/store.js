import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import contactsReducer from './contacts/items/items-slice';
import filterReducer from './contacts/filter/filter-reducer';
import authReducer from './auth/auth-slice'

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
}

const persistedReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
    reducer: {
        auth: persistedReducer,
        contacts: contactsReducer,
        filter: filterReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoreActions:[FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
})

export const persistor = persistStore(store);