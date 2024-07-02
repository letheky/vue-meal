import { Meal } from "./types";
import { AppState } from "./state";

export const setSearchMeals = (state: AppState, meals: Meal[]): void => {
    state.searchedMeals = meals;
};

export const setLoading = (state: AppState, isLoading: boolean): void => {
    state.loading = isLoading;
};