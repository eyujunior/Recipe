<template>
  <footer class="footer">
    <p>&copy; Copyright {{ getYear }}, All Rights Reserved</p>
  </footer>
</template>

<script>
export default {
  computed: {
    getYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style lang="scss" scoped>
footer {
  padding: 4rem;
  background-color: rgb(231, 231, 231);
  p {
    font-size: 1.8rem;
    text-align: center;
  }
}
</style>
