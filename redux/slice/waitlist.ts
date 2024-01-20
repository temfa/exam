import SampleBody from "@/utils/data";
import { createSlice } from "@reduxjs/toolkit";
const initialState = [] as SampleBody[];
const waitlistSlice = createSlice({
  name: "waitlist",
  initialState: initialState,
  reducers: {
    setWaitlist: (state, { payload }) => {
      return payload;
    },
    clearWaitlist: () => {
      return initialState;
    },
  },
});

const { reducer, actions } = waitlistSlice;
export const { setWaitlist, clearWaitlist } = actions;
export default reducer;
