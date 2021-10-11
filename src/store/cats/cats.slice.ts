import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CatsState {
  dogs: string[];
  cats: string[];
}

const initialState: CatsState = {
  dogs: [],
  cats: [],
};

export const catsSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {
    fetchCats: (state: CatsState) => { },
    fetchCatsSuccess: (state: CatsState, action: PayloadAction<string[]>) => {
      state.cats = action.payload;
    },
  },
});

export const { fetchCats, fetchCatsSuccess } = catsSlice.actions;

export default catsSlice.reducer;
