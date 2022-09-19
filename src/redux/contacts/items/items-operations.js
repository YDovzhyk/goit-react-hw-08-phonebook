import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../../../shared/api/contacts";

const isDublicate = ({name, number}, contacts) => {
    const normalizedTitle = name.toLowerCase();
    const normalizedAuthor = number.toLowerCase();

    const result = contacts.find(item => {
        return (normalizedTitle === item.name.toLowerCase() && normalizedAuthor === item.number.toLowerCase())
    });
    return Boolean(result);
}

export const fetchContacts  = createAsyncThunk(
    "contacts/fetch",
    async(_, thunkAPI) => {
        try {
            const data = await api.getContacts();
            return data;
        } catch ({response}) {
            const error = {
            status: response.status,
            message: response.data.message,
            }
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/add",
    async(data, {rejectWithValue}) => {
        try {
            const result = await api.addContact(data);
            return result;
        } catch ({response}) {
            const error = {
            status: response.status,
            message: response.data.message,
            }
            return rejectWithValue(error);
        }
    },
    {
        condition: (data, {getState}) => {
            const {contacts} = getState();
            if(isDublicate(data, contacts.items)) {
                alert(`${data.name} - ${data.number} is alredy exist`);
                return false;
            }
        }
    }
)

export const removeContact = createAsyncThunk(
    "contacts/remove",
    async(id, {rejectWithValue}) => {
        try {
            await api.removeContact(id);
            return id;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)
