import { createSlice } from "@reduxjs/toolkit";



export const notesSlice = createSlice({
    name: "notes",
    initialState: {
        data: []
    },

    reducers: {
        addNote: (state, action) => {
           state.data = [...state.data, action.payload]
        }
    }
})

export const { addNote } = notesSlice.actions;
export const selectNotes = (state) => state.notes.data;
export default notesSlice.reducer;