import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const subCategorySlice = createSlice({
    name: 'Sub Category',
    initialState,
    reducers: {
        FETCH: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            return action.payload;
        },
        // CREATE: (state, action) => {
        //     return [...state, action.payload.result];
        // },
        UPDATE: (state, action) => {
            return state.map((subCategory) => (subCategory._id === action.payload._id ? action.payload : subCategory));
        },
        // DELETE: (state, action) => {
        //     return state.filter((packing) => packing.packing_id !== action.payload);
        // }
    }
});

// Action creators are generated for each case reducer function
export const { FETCH, UPDATE } = subCategorySlice.actions;

export default subCategorySlice.reducer;
