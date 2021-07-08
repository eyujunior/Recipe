<template>
  <the-nav-bar />
  <div class="detail">
    <h1 class="recipe-header">{{ selectedRecipe.strMeal }}</h1>
    <div class="detail">
      <div class="detail-header">
        <img
          :src="selectedRecipe.strMealThumb"
          alt="meal"
          class="detail-image"
        />
        <div class="detail-desc">
          <div class="spans">
            <h3 class="title">instructions</h3>
            <a
              :href="selectedRecipe.strYoutube"
              target="”_blank”"
              class="detail-youtube"
            >
              <img
                src="@/assets/images/youtube.svg"
                class="youtube"
                alt="youtube"
              />
              Video
            </a>
          </div>
          <p class="detail-description">
            {{ selectedRecipe.strInstructions }}
          </p>
        </div>
      </div>

      <div class="ingredient">
        <h3 class="title">ingredient</h3>
        <div class="ingredient-container">
          <recipe-ingredient v-for="img in ingName" :key="img" :image="img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheNavBar from "../components/TheNavBar.vue";
import RecipeIngredient from "../components/RecipeIngredient.vue";
export default {
  components: {
    TheNavBar,
    RecipeIngredient,
  },
  data() {
    return {
      selectedRecipe: null,
      ingName: [],
    };
  },
  created() {
    this.selectedRecipe = this.$store.getters.getRecipes.find(
      (recipe) => recipe.strMeal === this.name
    );
    this.ingredientName();
  },
  computed: {
    name() {
      return this.$route.params.name;
    },
  },
  methods: {
    ingredientName() {
      if (this.selectedRecipe.strIngredient1) {
        this.ingName.push(this.selectedRecipe.strIngredient1);
      }
      if (this.selectedRecipe.strIngredient2) {
        this.ingName.push(this.selectedRecipe.strIngredient2);
      }
      if (this.selectedRecipe.strIngredient3) {
        this.ingName.push(this.selectedRecipe.strIngredient3);
      }
      if (this.selectedRecipe.strIngredient4) {
        this.ingName.push(this.selectedRecipe.strIngredient4);
      }
      if (this.selectedRecipe.strIngredient5) {
        this.ingName.push(this.selectedRecipe.strIngredient5);
      }
      if (this.selectedRecipe.strIngredient6) {
        this.ingName.push(this.selectedRecipe.strIngredient6);
      }
      if (this.selectedRecipe.strIngredient7) {
        this.ingName.push(this.selectedRecipe.strIngredient7);
      }
      if (this.selectedRecipe.strIngredient8) {
        this.ingName.push(this.selectedRecipe.strIngredient8);
      }
      if (this.selectedRecipe.strIngredient9) {
        this.ingName.push(this.selectedRecipe.strIngredient9);
      }
      if (this.selectedRecipe.strIngredient10) {
        this.ingName.push(this.selectedRecipe.strIngredient10);
      }
      if (this.selectedRecipe.strIngredient11) {
        this.ingName.push(this.selectedRecipe.strIngredient11);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.detail {
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
  overflow: hidden;

  @media only screen and(min-width: 800px) {
    padding: 2rem 3rem;
  }

  &-header {
    @media only screen and(min-width: 800px) {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: 6rem;
    }
  }
  &-image {
    width: 100%;
    max-height: 80rem;
    margin-bottom: 3rem;
    @media only screen and(min-width: 800px) {
      width: 50rem;
      margin-right: 4rem;
    }
    @media only screen and(min-width: 1000px) {
      width: 90rem;
      margin-right: 6rem;
    }
  }
  &-youtube {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    background: #ebebeb;
    padding: 0.5rem 1.5rem;
    border-radius: 1rem;

    @media only screen and(min-width: 800px) {
      font-size: 1.7rem;
      padding: 0.7rem 3rem;
    }
    .youtube {
      width: 3rem;
      margin-right: 2rem;
      @media only screen and(min-width: 800px) {
        width: 4rem;
      }
    }
  }

  &-desc {
    .title {
      font-size: 2rem;
      font-weight: normal;
      text-transform: uppercase;

      @media only screen and(min-width: 800px) {
        font-size: 3rem;
      }
    }
    .spans {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 2rem;
      @media only screen and(min-width: 800px) {
        margin-bottom: 4rem;
      }
    }
  }

  &-description {
    font-size: 1.6rem;
    margin-bottom: 4rem;
    line-height: 1.6;

    @media only screen and(min-width: 800px) {
      font-size: 1.9rem;
    }
  }

  .recipe-header {
    font-size: 6rem;
    font-weight: bold;
    text-align: center;
    font-family: "Cookie";
    letter-spacing: 1px;
    margin: 6rem 0;

    @media only screen and(min-width: 800px) {
      font-size: 8rem;
    }
  }
}

.ingredient {
  margin-bottom: 8rem;
  .title {
    font-size: 3rem;
    text-transform: capitalize;
    margin-bottom: 2rem;

    @media only screen and(min-width: 800px) {
      font-size: 4rem;
      margin-bottom: 4rem;
    }
  }

  &-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    grid-gap: 4rem 2rem;
  }
}
</style>
