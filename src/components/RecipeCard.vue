<template>
  <div class="card">
    <svg
      v-if="showAdd"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-add"
      @click="addFavourite(recipe.strMeal)"
    >
      <title />
      <g data-name="Layer 54" id="Layer_54">
        <path
          class="cls-1"
          d="M16,28.72a3,3,0,0,1-2.13-.88L3.57,17.54a8.72,8.72,0,0,1-2.52-6.25,8.06,8.06,0,0,1,8.14-8A8.06,8.06,0,0,1,15,5.68l1,1,.82-.82h0a8.39,8.39,0,0,1,11-.89,8.25,8.25,0,0,1,.81,12.36L18.13,27.84A3,3,0,0,1,16,28.72ZM9.15,5.28A6.12,6.12,0,0,0,4.89,7a6,6,0,0,0-1.84,4.33A6.72,6.72,0,0,0,5,16.13l10.3,10.3a1,1,0,0,0,1.42,0L27.23,15.91A6.25,6.25,0,0,0,29,11.11a6.18,6.18,0,0,0-2.43-4.55,6.37,6.37,0,0,0-8.37.71L16.71,8.8a1,1,0,0,1-1.42,0l-1.7-1.7a6.28,6.28,0,0,0-4.4-1.82Z"
        />
      </g>
    </svg>
    <svg
      v-else
      class="icon icon-exit"
      fill="none"
      height="24"
      stroke="red"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      @click="removeFavourite(recipe.strMeal)"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="15" x2="9" y1="9" y2="15" />
      <line x1="9" x2="15" y1="9" y2="15" />
    </svg>
    <router-link :to="link">
      <img
        :src="recipe.strMealThumb"
        class="card-image"
        :alt="recipe.strMeal"
      />
      <h2 class="card-title">{{ recipe.strMeal }}</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "RecipeCard",
  props: ["recipe"],
  computed: {
    link() {
      return "/" + "recipe/" + this.recipe.strMeal;
    },
    showAdd() {
      return this.$route.path === "/";
    },
  },
  methods: {
    addFavourite(name) {
      let recipes = localStorage.getItem("recipes")
        ? JSON.parse(localStorage.getItem("recipes"))
        : [];

      const selectedRecipe = this.$store.getters.getRecipes.find(
        (recipe) => recipe.strMeal === name
      );
      recipes.push(selectedRecipe);
      recipes = [...new Set(recipes.map((_) => JSON.stringify(_)))].map((_) =>
        JSON.parse(_)
      );

      localStorage.setItem("recipes", JSON.stringify(recipes));
    },
    removeFavourite(meal) {
      let recipes = this.$store.getters.getFav;

      let newRecipes = recipes.filter((recipe) => {
        return recipe.strMeal !== meal;
      });
      localStorage.setItem("recipes", JSON.stringify(newRecipes));
      this.$store.commit("setFav", newRecipes);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  background: #ec9108;
  position: relative;

  &-image {
    width: 100%;
    height: 80%;
    margin-bottom: 2rem;
  }
  &-title {
    margin-bottom: 2rem;
    text-align: center;
    font-size: 3rem;
    font-family: "Cookie";
    letter-spacing: 2px;
  }
  .icon {
    cursor: pointer;
    position: absolute;
    top: 1rem;
    right: 1rem;
    border-radius: 50%;
    transition: all 0.3s ease;

    &-add {
      stroke: #fff;
      fill: #fff;
      background: green;
      width: 5rem;
      height: 5rem;
      padding: 0.7rem;
    }

    &-exit {
      cursor: pointer;
      position: absolute;
      top: 1rem;
      right: 1rem;
      width: 5rem;
      height: 5rem;
      stroke: #fff;
      fill: red;
    }

    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
