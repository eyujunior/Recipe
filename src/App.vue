<template>
  <div>
    <router-view></router-view>
    <the-footer />
  </div>
</template>
<script>
import TheFooter from "./components/TheFooter.vue";
export default {
  components: {
    TheFooter,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Cookie&display=swap");
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 10px;
}
body {
  font-family: "poppins";
}
.home {
  overflow: hidden;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: #000;
}

.btn {
  cursor: pointer;
  padding: 1rem 3rem;
  font-size: 1.7rem;
  border-radius: 0.5rem;
  border: none;
  font-family: inherit;
  @media only screen and(max-width: 1000px) {
    font-size: 1.5rem;
    padding: 1rem 2rem;
  }

  &-primary {
    background: #238147;
    color: #fff;
    transition: all 0.3s ease;

    &:hover {
      background: lighten(#238147, 10);
    }
  }
}

.bold {
  font-weight: bold !important;
  color: rgb(231, 172, 63);
}
</style>
