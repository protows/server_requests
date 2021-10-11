import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PetsState {
  dogs: string[];
  cats: string[];
}

const initialState: PetsState = {
  dogs: [],
  cats: [],
};

export const petsSlice = createSlice({
  name: "pets",
  initialState,
  reducers: {
    fetchDogs: (state: PetsState) => {},
    fetchDogsSuccess: (state: PetsState, action: PayloadAction<string[]>) => {
      state.dogs = action.payload;
    },
  },
});

export const { fetchDogs, fetchDogsSuccess } = petsSlice.actions;

export default petsSlice.reducer;
