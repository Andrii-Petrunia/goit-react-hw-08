import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  phone: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilterName(state, action) {
      state.name = action.payload;
    },
    setFilterPhone(state, action) {
      state.phone = action.payload;
    },
  },
});

export const { setFilterName, setFilterPhone } = filtersSlice.actions;
export default filtersSlice.reducer;
