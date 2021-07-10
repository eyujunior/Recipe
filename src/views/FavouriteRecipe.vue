<template>
  <div>
    <the-nav-bar />
    <p v-if="isFavouriteEmpty" class="text">
      there are no favourite recipes. add your favourite recipes..
    </p>

    <recipe-container v-else list="fav" />
  </div>
</template>

<script>
import TheNavBar from "../components/TheNavBar.vue";
import RecipeContainer from "../components/RecipeContainer.vue";
export default {
  name: "favouriteRecipe",
  components: {
    TheNavBar,
    RecipeContainer,
  },
  computed: {
    isFavouriteEmpty() {
      return (
        this.$store.getters.getFav.length === 0 ||
        this.$store.getters.getFav.length === null
      );
    },
  },
  created() {
    let recipes = localStorage.getItem("recipes");
    recipes = JSON.parse(recipes);
    this.$store.commit("setFav", recipes);
  },
};
</script>

<style lang="scss" scoped>
.text {
  font-size: 2rem;
  text-transform: capitalize;
  text-align: center;
  margin: 4rem 0;
}
</style>
