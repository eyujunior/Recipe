<template>
  <header>
    <nav class="container">
      <div class="branding">
        <router-link class="header" :to="{ name: 'Home' }"
          >Eyu<span>Recipe</span>
        </router-link>
      </div>
      <div class="nav-links">
        <ul v-show="!mobile">
          <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
          <router-link
            class="link"
            :class="{ bold: current === 'about' }"
            to="/about"
            >About</router-link
          >
          <router-link
            class="link"
            :class="{ bold: current === 'contact' }"
            to="/contact"
            >Contact</router-link
          >
        </ul>
      </div>
      <img
        src="../assets/images/bars-regular.svg"
        @click="toggleNav"
        v-show="mobile"
        class="menu"
        alt="menu"
      />
      <transition name="mobile-nav">
        <ul class="mobile-nav" v-show="mobileNav">
          <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
          <router-link class="link" to="/about">About</router-link>
          <router-link class="link" to="/contact">Contact</router-link>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script>
export default {
  name: "navigation",
  props: ["current"],
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
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
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: #fff;
  padding: 0 4rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 99;
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;

  .link {
    font-weight: 500;
    padding: 0 8px;
    transition: 0.3 color ease;

    &:hover {
      color: #1eb8b8;
    }
  }

  nav {
    display: flex;
    padding: 25px 0;

    .branding {
      display: flex;
      align-items: center;

      .header {
        font-weight: 600;
        font-size: 24px;
        color: #000;
        text-decoration: none;

        span {
          color: rgb(231, 172, 63);
        }
      }
    }

    .nav-links {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex: 1;
      .link {
        font-size: 1.8rem;
      }

      ul {
        margin-right: 32px;

        .link:not(:last-child) {
          margin-right: 32px;
        }
      }
    }
  }

  .menu {
    cursor: pointer;
    position: absolute;
    top: 32px;
    right: 25px;
    height: 25px;
    width: auto;
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
}
</style>
