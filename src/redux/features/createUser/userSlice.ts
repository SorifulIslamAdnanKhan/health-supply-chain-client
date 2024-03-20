import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type TUser = {
  name: string;
  email: string;
  password: string;
};

type TInitialState = {
  users: TUser[];
};
const initialState: TInitialState = {
  users: [],
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, action: PayloadAction<TUser>) => {
      state.users.push(action.payload);
    },
  },
});

export const { createUser } = userSlice.actions;

export default userSlice.reducer;
