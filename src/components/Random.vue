<template>
  <div class="random mx-auto">
    <p class="title mb-1 p-1 mb-3 font-bold quicksand">Match your musical mood:</p>
    <div class="genre-container">
      <div class="row">
        <div class="col-6 col-sm-4" v-for="index in 6" :key="genres[index-1].id">
          <div
            class="genre-block prompt"
            :genre="genres[index-1].name"
            :style="{ background: genres[index-1].background, color: genres[index-1].color }"
            :value="genres[index-1].genreId"
            @mouseover="onHover"
            @mouseout="offHover"
            @click="genreSelect"
          >{{genres[index-1].name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import music from "../utils/music";
import ingredients from "../utils/ingredients";
import { globalState } from "../main";
import axios from 'axios';
export default {
  name: "Random",
  data() {
    return {
      genres: music.genres
    };
  },
  methods: {
    onHover: function(event) {
      const genre = event.target.getAttribute('genre');
      const currentGenre = this.genres.find(e => e.name === genre);
      event.target.setAttribute("style", `background: white; color: ${currentGenre.background}`)
    },
    offHover: function(event) {
      const genre = event.target.getAttribute('genre');
      const currentGenre = this.genres.find(e => e.name === genre);
      event.target.setAttribute("style", `background: ${currentGenre.background}; color: ${currentGenre.color}`)
    },
    genreSelect: async function(event) {
      globalState.selectedGenre = event.target.getAttribute('value');
      const alcohols = ingredients.drinks.filter(e => e.genreId.includes(parseInt(globalState.selectedGenre)));
      const randomAlcohol = alcohols[Math.floor(Math.random() * alcohols.length)].name.toLowerCase().replace(/\s/g, '_');
      let queryURL = `https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${randomAlcohol}`;
      const results = await axios.get(queryURL);
      const randomDrink = results.data.drinks[Math.floor(Math.random() * results.data.drinks.length)];
      queryURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${randomDrink.strDrink.toLowerCase().replace(/\s/g, '_')}`;
      const drinkDetails = await axios.get(queryURL);
      globalState.selectedDrink = drinkDetails.data.drinks[0];
      globalState.getIngredients(drinkDetails.data.drinks[0]);
      this.$router.push('results');
    }
  }
};
</script>

<style>
.random {
  width: 85%;
  margin-bottom: 30px;
}

.genre-container div {
  padding-left: 0;
  padding-right: 0;
}

.genre-block {
  font-size: 5vw;
  text-align: center;
  padding: 30px 10px;
}

.genre-block:hover {
  cursor: pointer;
}
</style>