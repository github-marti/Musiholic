// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCompactDisc, faMusic, faWineGlass, faHeadphones, faGlassCheers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import BootstrapVue from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue)

Vue.use(VueRouter)

library.add(
  faCompactDisc,
  faMusic,
  faWineGlass,
  faHeadphones,
  faGlassCheers
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
};

export const globalState = new Vue({
  data: {
    selectedDrink: {},
    ingredients: [],
    selectedGenre: 0
  },
  methods: {
    getIngredients: function (drink) {
      let i = 1;
      while (drink[`strIngredient${i}`]) {
        console.log(drink[`strIngredient${i}`]);
        this.ingredients.push({
          id: i,
          name: drink[`strIngredient${i}`],
          measure: drink[`strMeasure${i}`]
        });
        i++;
      }
      console.log(this.ingredients);
    }
  }
})
