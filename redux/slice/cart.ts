import SampleBody from "@/utils/data";
import { createSlice } from "@reduxjs/toolkit";

const initialState = [] as SampleBody[];

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    setCart: (state, { payload }) => {
      return payload;
    },
    clearCart: () => {
      return initialState;
    },
  },
});

const { reducer, actions } = cartSlice;
export const { setCart, clearCart } = actions;
export default reducer;
