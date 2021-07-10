<template>
  <div class="flex">
    <input
      type="text"
      class="search-input"
      placeholder="Enter your meal..."
      v-model="query"
    />
    <button class="btn btn-circle" @click="searchRecipe">
      <img src="../assets/images/search.svg" alt=" search" class="img" />
    </button>
  </div>
</template>

<script>
export default {
  name: "searchInput",
  data() {
    return {
      query: "",
    };
  },
  methods: {
    searchRecipe() {
      this.$store.dispatch("searchRecipe", this.query);
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  width: 100%;
  text-align: center;
}
.search-input {
  padding: 2rem 3rem;
  border: none;
  border-top-left-radius: 5rem;
  border-bottom-left-radius: 5rem;
  border-top-right-radius: 0;
  background-color: rgb(231, 231, 231);
  font-size: 2rem;
  width: 35%;
  outline: none;
  @media only screen and(max-width: 850px) {
    width: 65%;
    padding: 1.5rem 2.5rem;
  }

  @media only screen and(max-width: 850px) {
    width: 85%;
  }
}

.flex {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin-bottom: 6rem;
  margin-left: auto;
  margin-right: auto;

  .btn-circle {
    padding: 1.56rem 2rem;
    background-color: rgb(231, 231, 231);
    border-top-right-radius: 4rem;
    border-bottom-right-radius: 4rem;

    @media only screen and(max-width: 850px) {
      padding: 1.2rem 2.5rem;
    }
  }
  img {
    width: 2.5rem;
  }
}
</style>
