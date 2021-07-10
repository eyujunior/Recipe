<template>
  <div class="home">
    <div class="hero">
      <div class="left">
        <img
          src="../assets/images/pepper.svg"
          alt="pepper"
          class="icon icon-pepper"
        />
        <img
          src="../assets/images/onion.svg"
          alt="onion"
          class="icon icon-onion"
        />
        <img
          src="../assets/images/eggplant.svg"
          alt="eggplant"
          class="icon icon-eggplant"
        />

        <p class="logo">eyu<span>recipe</span></p>

        <div class="left-content">
          <h1 class="heading-primary">Start your cooking</h1>
          <h2 class="heading-secondary">with popular recipes</h2>
          <p class="subtitle">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            quaerat ad veritatis quos aliquam illum facilis laboriosam tempora
            nobis sit soluta odio, enim minima magnam sed maiores iusto magni!
            Quos?
          </p>
          <button class="btn btn-primary">Learn More</button>
        </div>
      </div>

      <div class="right">
        <nav class="nav">
          <div class="nav-links">
            <ul v-show="!mobile">
              <router-link class="link bold" to="#">Home</router-link>
              <router-link class="link" to="/favourite">Favourite</router-link>

              <router-link class="link" to="/about">About</router-link>
              <router-link class="link" to="/contact">Contact</router-link>
            </ul>
          </div>
          <transition name="mobile-nav">
            <ul class="mobile-nav" v-show="mobileNav">
              <router-link class="link bold" to="#">Home</router-link>
              <router-link class="link" to="/favourite">Favourite</router-link>
              <router-link class="link" to="/about">About</router-link>
              <router-link class="link" to="/contact">Contact</router-link>
            </ul>
          </transition>
          <img
            src="../assets/images/bars-regular.svg"
            @click="toggleNav"
            v-show="mobile"
            class="menu"
          />
        </nav>
      </div>
    </div>

    <div class="browse">
      <h2 class="recipe-header">Search your favourite meal</h2>
      <search-input />
      <recipe-container list="all" />
    </div>
  </div>
</template>

<script>
import SearchInput from "../components/SearchInput.vue";
import RecipeContainer from "../components/RecipeContainer.vue";
export default {
  name: "Home",
  components: {
    SearchInput,
    RecipeContainer,
  },
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
    this.$store.dispatch("fetchRecipes");
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 850) {
        this.mobile = true;
        return;
      }

      this.mobile = false;
      this.mobileNav = false;

      return;
    },
    toggleNav() {
      this.mobileNav = !this.mobileNav;
    },
  },
};
</script>

<style lang="scss" scoped>
.hero {
  display: grid;
  grid-template-columns: 57% 43%;
  margin-bottom: 8rem;
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;

  @media only screen and(max-width: 850px) {
    grid-template-columns: 80% 20%;
  }
  @media only screen and(max-width: 500px) {
    grid-template-columns: 95% 0%;
  }

  .left {
    height: 100vh;
    padding: 2rem 0rem;
    padding-left: 6rem;
    position: relative;
    @media only screen and(max-width: 850px) {
      padding-left: 4rem;
    }

    @media only screen and(max-width: 500px) {
      padding-left: 2rem;
    }
    .logo {
      font-size: 3rem;
      font-weight: 600;
      text-transform: uppercase;
      span {
        color: rgb(231, 172, 63);
      }
      @media only screen and(max-width: 450px) {
        font-size: 2rem;
      }
    }
    .icon {
      position: absolute;
      opacity: 0.8;

      @media only screen and(max-width: 1200px) {
        display: none;
      }
      &-pepper {
        top: 5%;
        left: 40%;
      }
      &-onion {
        top: 40%;
        right: 0%;
      }

      &-eggplant {
        bottom: 0%;
        left: 40%;
      }
    }

    &-content {
      margin-top: 15rem;
      @media only screen and(max-width: 1200px) {
        margin-top: 8rem;
      }
      .heading {
        &-primary {
          font-size: 10rem;
          font-family: "Cookie";
          font-weight: normal;
          text-transform: capitalize;
          margin-bottom: 2rem;
          @media only screen and(max-width: 1200px) {
            font-size: 8rem;
            margin-bottom: 1rem;
          }

          @media only screen and(max-width: 930px) {
            font-size: 6.5rem;
          }
        }
        &-secondary {
          font-size: 4rem;
          text-transform: capitalize;
          font-weight: 500;
          margin-bottom: 2rem;
          @media only screen and(max-width: 1200px) {
            font-size: 3rem;
            margin-bottom: 1rem;
          }

          @media only screen and(max-width: 900px) {
            font-size: 2.5rem;
          }
        }
      }
      .subtitle {
        font-size: 1.7rem;
        width: 60%;
        margin-bottom: 3rem;
        @media only screen and(max-width: 1200px) {
          width: 75%;
        }
        @media only screen and(max-width: 850px) {
          width: 85%;
        }
      }
    }
  }

  .right {
    height: 100vh;
    background: url("../assets/images/hero.jpg");
    background-size: cover;
    padding: 2rem 6rem;
    @media only screen and(max-width: 1000px) {
      padding: 2rem 4rem;
    }
    @media only screen and(max-width: 850px) {
      background: none;
    }
    .nav-links ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 1.8rem;
    }
    .mobile-nav {
      padding: 20px;
      width: 75%;
      max-width: 250px;
      display: flex;
      flex-direction: column;
      position: fixed;
      height: 100%;
      background-color: #303030;
      top: 0;
      left: 0;

      .link {
        padding: 15px 0;
        color: #fff;
        font-size: 1.8rem;
      }
    }
    .nav {
      &-list {
        display: flex;
        align-items: center;
        background-position: top;
        justify-content: space-between;
      }
      &-item {
        font-size: 1.8rem;
        text-transform: capitalize;

        @media only screen and(max-width: 1000px) {
          font-size: 1.6rem;
        }
      }
    }
  }
}
.menu {
  cursor: pointer;
  position: absolute;
  top: 2rem;
  right: 4rem;
  height: 25px;
  width: auto;

  @media only screen and(max-width: 500px) {
    right: 02rem;
  }
}

.browse {
  .recipe-header {
    font-size: 8rem;
    font-weight: bold;
    text-align: center;
    font-family: "Cookie";
    letter-spacing: 1px;
    margin-bottom: 6rem;
  }
}
.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: all 1s ease;
}
.mobile-nav-enter {
  transform: translateX(-250px);
}
.mobile-nav-enter-to {
  transform: translateX(0);
}
.mobile-nav-leave-to {
  transform: translateX(-250px);
}
</style>
