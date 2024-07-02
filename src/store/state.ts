import { Meal } from "./types";

export interface AppState {
    searchedMeals: Meal[];
    loading: boolean;
}

const state: AppState = {
    searchedMeals: [] as Meal[],
    loading: false
};

export default state;
