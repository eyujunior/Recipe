<template>
  <router-link :to="link">
    <div class="card">
      <img :src="recipe.strMealThumb" class="card-image" alt="food-1" />
      <h2 class="card-title">{{ recipe.strMeal }}</h2>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "RecipeCard",
  props: ["recipe"],
  computed: {
    link() {
      return this.$route.path + "recipe/" + this.recipe.strMeal;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  background: #ec9108;

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
}
</style>
