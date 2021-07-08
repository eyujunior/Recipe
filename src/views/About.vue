<template>
  <the-nav-bar current="about" />
  <section id="about" class="about">
    <h1 id="smaller" class="about-title">About</h1>
    <div class="about-container">
      <img src="../assets/images/about.jpg" alt="my pic" class="about-img" />
      <div class="intro">
        <p class="about-me">
          We are here to help you cook delicious meals with less stress and more
          joy. We offer recipes and cooking advice for home cooks, by home
          cooks. Helping create “kitchen wins” is what we’re all about.Today,
          Simply Recipes has grown into a trusted resource for home cooks with
          tested recipes, guides, and meal plans.
        </p>
        <button class="btn btn-primary">Read More</button>
      </div>
    </div>
  </section>
</template>

<script>
import TheNavBar from "../components/TheNavBar.vue";
export default {
  components: {
    TheNavBar,
  },
};
</script>

<style lang="scss" scoped>
.about {
  padding: 1rem;
  margin-bottom: 8rem;

  @media only screen and (min-width: 800px) {
    padding: 2rem 4rem;
  }

  &-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100vw;

    @media only screen and (min-width: 800px) {
      flex-direction: row;
      align-items: flex-start;
    }
  }

  &-img {
    width: 100%;
    margin-bottom: 5rem;

    @media only screen and (min-width: 850px) {
      margin-right: 4rem;
      width: 30%;
    }
  }

  .about-me {
    font-size: 1.7rem;
    line-height: 1.6;
    margin-bottom: 3rem;

    @media only screen and (min-width: 850px) {
      font-size: 1.9rem;
      width: auto;
    }
  }

  .about-title {
    font-size: 5rem;
    font-family: "playfair display";
    text-align: center;
    margin-bottom: 5rem;
    margin-top: 2rem;
  }
}
</style>
