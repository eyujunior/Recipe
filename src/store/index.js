import { createStore } from "vuex";

export default createStore({
  state: {
    Recipes: [],
  },
  getters: {
    getRecipes(state) {
      return state.Recipes;
    },
  },
  mutations: {
    setRecipes(state, payload) {
      state.Recipes = payload;
    },
  },
  actions: {
    async fetchRecipes(context) {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?f=b"
      );

      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(response.message || "fetching failed");
        throw error;
      }

      context.commit("setRecipes", responseData.meals);
    },
  },
  modules: {},
});
