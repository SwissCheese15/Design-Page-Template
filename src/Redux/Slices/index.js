import { createSlice } from "@reduxjs/toolkit";

export const PageSlice = createSlice({
    name: "page",
    initialState: {
        currentPage: 1
    },
    reducers: {
        // clicking on right nav arrow
        rightArrow: (state) => {

            state.currentPage === 3 ? state.currentPage = 1 : state.currentPage += 1
        },

         // clicking on left nav arrow
        leftArrow: (state) => {
            
            state.currentPage === 1 ? state.currentPage = 3 : state.currentPage -= 1
        }
}});

export const { rightArrow, leftArrow } = PageSlice.actions;
export default PageSlice.reducer;
