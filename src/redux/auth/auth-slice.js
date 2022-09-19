import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, current } from './auth-operations';

const initialState = {
    user: {name: null, email: null},
    token: null,
    isLoggedIn: false,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [register.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.user = payload.user;
            store.token = payload.token;
            store.isLoggedIn = true;
        },
        [register.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        },
        [logIn.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [logIn.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.user = payload.user;
            store.token = payload.token;
            store.isLoggedIn = true;
        },
        [logIn.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        },
        [logOut.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [logOut.fulfilled]: (store) => {
            store.user = {name: null, email: null};
            store.token = null;
            store.isLoggedIn = false;
        },
        [logOut.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        },
        [current.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [current.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.user = payload;
            store.isLoggedIn = true;
        },
        [current.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        }
    },
});

export default authSlice.reducer;
