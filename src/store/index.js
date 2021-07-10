import { createStore } from "vuex";

export default createStore({
  state: {
    Recipes: [],
    favRecipes: [],
  },
  getters: {
    getRecipes(state) {
      return state.Recipes;
    },
    getFav(state) {
      return state.favRecipes;
    },
  },
  mutations: {
    setRecipes(state, payload) {
      state.Recipes = payload;
    },
    setFav(state, payload) {
      state.favRecipes = payload;
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
    async searchRecipe(context, payload) {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${payload}`
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
