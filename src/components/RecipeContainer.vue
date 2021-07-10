<template>
  <div class="container">
    <recipe-card v-for="recipe in Recipes" :key="recipe.id" :recipe="recipe" />
  </div>
</template>

<script>
import RecipeCard from "./RecipeCard.vue";
export default {
  props: ["list"],
  components: {
    RecipeCard,
  },
  computed: {
    Recipes() {
      if (this.list === "all") {
        return this.$store.getters.getRecipes;
      } else {
        return this.$store.getters.getFav;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  grid-gap: 2rem;
  padding: 2rem 6rem;
  width: 100%;
  place-content: center;
  margin-bottom: 8rem;
}
</style>
