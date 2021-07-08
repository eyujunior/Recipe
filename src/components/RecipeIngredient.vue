<template>
  <div class="ingredient-item">
    <img
      :src="`https://www.themealdb.com/images/ingredients/${image}.png`"
      alt="ingredients"
      class="ingredient-image"
    />
    <h4 class="ingredient-name">{{ image }}</h4>
  </div>
</template>

<script>
export default {
  props: ["image"],
};
</script>

<style lang="scss" scoped>
.ingredient {
  &-item {
  }
  &-name {
    font-size: 1.8rem;
    text-transform: capitalize;
    text-align: center;

    @media only screen and(min-width: 800px) {
      font-size: 2.2rem;
    }
  }

  &-image {
    width: 100%;
    margin-bottom: 1rem;
  }
}
</style>
