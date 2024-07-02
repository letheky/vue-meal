import http from "../axiosClient";
import { Commit } from "vuex";
import { Meal } from "./types";

export function searchMeals({ commit }: { commit: Commit }, keyword: string) {
    commit('setLoading', true)
    http.get(`search.php?s=${keyword}`)
        .then(({ data }) => {
            const meals: Meal[] = data.meals || [];
            commit('setLoading', false)
            commit('setSearchMeals', meals);
        })
        .catch(error => {
            console.error("Error fetching meals: ", error);
            commit('setSearchMeals', []);
        });
}
