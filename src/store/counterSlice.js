import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0
}

export const counterSlice = createSlice({
    name: "counterValue",
    initialState,
    reducers: {

        increment: (state) => {
            state.count += 1;
        },

        decrement: (state) => {
            state.count -= 1;
        },

        reload: (state) => {
            state.count = 0;
        },

        addValue: (state, action) => {
            state.count += action.payload;
        },

        sayHello: (state) => {
            state.count = "Hello world";
        },

        showMessage: (state, action) => {
            state.count = action.payload;
        }
    }
})

export const { increment, decrement, reload, addValue, sayHello, showMessage } = counterSlice.actions;

export default counterSlice.reducer;