import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    selectedChat: null,
    user: null
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
        selectChat: (state, action) => {
            state.selectedChat = action.payload;
        },
        resetChat: (state) => {
          state.selectedChat = null

        }
    },

});
export const {login, logout, selectChat, resetChat} = appSlice.actions;

export const selectUser = (state) => state.app.user;

export const selectCurrChat = (state) => state.app.selectedChat;
//Choosing a state

export default appSlice.reducer;
