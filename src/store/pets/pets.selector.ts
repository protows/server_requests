import { RootState } from "../store";

export const selectDogs = (state: RootState) => state.pets.dogs;
