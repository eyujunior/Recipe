<template>
  <div class="container">
    <recipe-card v-for="recipe in Recipes" :key="recipe.id" :recipe="recipe" />
  </div>
</template>

<script>
import RecipeCard from "./RecipeCard.vue";
export default {
  components: {
    RecipeCard,
  },
  computed: {
    Recipes() {
      return this.$store.getters.getRecipes;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  grid-gap: 8rem 2rem;
  padding: 2rem 6rem;
  width: 100%;
  place-content: center;
  margin-bottom: 8rem;
}
</style>
