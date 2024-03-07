import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedSegmentValue: "Bhimavaram",
  defaultSegmentCategory: "Assembly",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSelectedResult(state, action) {
      state.selectedSegmentValue = action.payload;
    },

    // eslint-disable-next-line no-unused-vars
    resetSelectedResult(state, action) {
      state.selectedSegmentValue = null;
    },
  },
});

export const { setSelectedResult, resetSelectedResult } = searchSlice.actions;

export default searchSlice.reducer;
