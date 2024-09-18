// features/sidebar/sidebarSlice.js
import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    activeItem: "",
  },
  reducers: {
    setActiveItem(state, action) {
      state.activeItem = action.payload;
    },
  },
});

export const { setActiveItem } = sidebarSlice.actions;
export default sidebarSlice.reducer;
