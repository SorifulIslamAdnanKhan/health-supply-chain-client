import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TSupply = {
  _id?: string;
  image: string;
  category: string;
  title: string;
  amount: number;
  description: string;
};

type TInitialState = {
  supply: TSupply[];
};

const initialState: TInitialState = {
  supply: [],
};

const supplySlice = createSlice({
  name: "supply",
  initialState,
  reducers: {
    createSupply: (state, action: PayloadAction<TSupply>) => {
      state.supply.push(action.payload);
    },
    updateSupply: (state, action: PayloadAction<TSupply>) => {
      state.supply.push(action.payload);
    },
  },
});

export const { createSupply } = supplySlice.actions;
export default supplySlice.reducer;
