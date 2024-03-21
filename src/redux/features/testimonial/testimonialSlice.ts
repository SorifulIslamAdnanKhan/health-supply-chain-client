import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TTestimonial = {
  author: string;
  description: string;
  image: string;
};

type TInitialState = {
  testimonial: TTestimonial[];
};

const initialState: TInitialState = {
  testimonial: [],
};

const testimonialSlice = createSlice({
  name: "testimonial",
  initialState: initialState,
  reducers: {
    createTestimonial: (state, action: PayloadAction<TTestimonial>) => {
      state.testimonial.push(action.payload);
    },
  },
});

export const { createTestimonial } = testimonialSlice.actions;
export default testimonialSlice.reducer;
