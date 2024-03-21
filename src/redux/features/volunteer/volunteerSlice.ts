import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TVolunteer = {
  name: string;
  email: string;
  phone: string;
  location: string;
  image: string;
};

type TInitialState = {
  volunteer: TVolunteer[];
};

const initialState: TInitialState = {
  volunteer: [],
};

const volunteerSlice = createSlice({
  name: "volunteer",
  initialState: initialState,
  reducers: {
    createVolunteer: (state, action: PayloadAction<TVolunteer>) => {
      state.volunteer.push(action.payload);
    },
  },
});

export const { createVolunteer } = volunteerSlice.actions;
export default volunteerSlice.reducer;
