<template>
  <div class="card">
    <img src="../assets/images/food-2.jpg" class="card-image" alt="food-1" />
    <h2 class="card-title">Food Name</h2>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  background: red;

  &-image {
    width: 100%;
    height: 100%;
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
