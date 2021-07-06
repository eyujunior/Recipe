<template>
  <div class="container">
    <recipe-card />
    <recipe-card />
    <recipe-card />
    <recipe-card />
    <recipe-card />
    <recipe-card />
    <recipe-card />
    <recipe-card />
  </div>
</template>

<script>
import RecipeCard from "./RecipeCard.vue";
export default {
  components: {
    RecipeCard,
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
