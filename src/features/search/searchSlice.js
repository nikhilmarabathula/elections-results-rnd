import { createSlice } from "@reduxjs/toolkit";

const segmentCategoryMap = {
  Assembly: "Bhimavaram",
  Parliament: "Anakapalli",
  Mandal: "Veeravasaram",
  District: "West Godavari",
};

const initialState = {
  segmentValue: "Bhimavaram",
  segmentCategory: "Assembly",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSegmentCategory(state, action) {
      state.segmentCategory = action.payload;
      state.segmentValue = segmentCategoryMap[action.payload] || "Bhimavaram";
    },

    setSegmentValue(state, action) {
      state.segmentValue = action.payload;
    },
  },
});

export const { setSegmentCategory, setSegmentValue } = searchSlice.actions;

export default searchSlice.reducer;
