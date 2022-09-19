import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from "../../shared/api/auth";

export const register = createAsyncThunk(
    'auth/register', 
    async(data, {rejectWithValue}) => {
        try {
            const result = await api.postUser(data);
            return result;
        } catch ({response}) {
            const error = {
            status: response.status,
            message: response.data.message,
            }
            return rejectWithValue(error);
        }
    },
)

export const logIn = createAsyncThunk(
    'auth/login', 
    async(data, {rejectWithValue}) => {
        try {
            const result = await api.postLogin(data);
            return result;
        } catch ({response}) {
            const error = {
            status: response.status,
            message: response.data.message,
            }
            return rejectWithValue(error);
        }
    },
)

export const logOut = createAsyncThunk(
    "auth/logout",
    async(_, {rejectWithValue}) => {
        try {
            const result = await api.logout();
            return result;
        } catch ({response}) {
            const error = {
                status: response.status,
                message: response.data.message,
            }
            return rejectWithValue(error);
        }
    }
)

export const current = createAsyncThunk(
    "auth/current",
    async(_, {rejectWithValue, getState}) => {
        const state = getState();
        const persistedToken = state.auth.token;
        if(persistedToken === null) {
            return rejectWithValue();
        }
        try {
            const result = await api.getCurrent(persistedToken);
            return result;
        } catch ({response}) {
            const error = {
                status: response.status,
                message: response.data.message,
            }
                return rejectWithValue(error);
        }
    }
)

