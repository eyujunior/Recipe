import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import RecipeDetail from "../views/RecipeDetail.vue";
import FavouriteRecipe from "../views/FavouriteRecipe.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/favourite",
    name: "favourite",
    component: FavouriteRecipe,
  },
  {
    path: "/recipe/:name",
    name: "Recipe detail",
    component: RecipeDetail,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
