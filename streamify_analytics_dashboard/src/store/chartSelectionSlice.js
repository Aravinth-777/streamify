import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  revenueSource: null,
};

const chartSelectionSlice = createSlice({
  name: "chartSelectionSlice",
  initialState,
  reducers: {
    setRevenueSource: (state, action) => {
      state.revenueSource = action.payload;
    },
    resetChartSelectionData: () => {
      return { ...initialState };
    },
  },
});

export const { setRevenueSource, resetChartSelectionData } =
  chartSelectionSlice.actions;
export default chartSelectionSlice.reducer;
