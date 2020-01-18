<template>
  <div>
    <template v-if="results === 'None Found'">
      <div class="result-card card mx-auto my-3 p-3 text-center">
        <h3>We couldn't find any drinks.</h3>
        <g-link to="/">
          <h4>Try again?</h4>
        </g-link>
      </div>
    </template>
    <template v-else-if="results.length <= 5">
      <div
        class="result-card card mx-auto my-3 p-3 text-center"
        v-for="result in results"
        :data-value="results[index-1].strDrink.toLowerCase().replace(/\s/g, '_')"
        :key="result.idDrink"
        @click="selectDrink"
      >
        <h3>{{ result.strDrink }}</h3>
        <img
          class="result-img mx-auto"
          :src="results[index-1].strDrinkThumb"
          :data-value="results[index-1].strDrink.toLowerCase().replace(/\s/g, '_')"
        />
      </div>
    </template>
    <template v-else>
      <div
        class="result-card card mx-auto my-3 p-3 text-center"
        v-for="index in numOfResults"
        :key="results[index-1].idDrink"
        @click="selectDrink"
      >
        <h3>{{ results[index-1].strDrink }}</h3>
        <img
          class="result-img mx-auto"
          :src="results[index-1].strDrinkThumb"
          :data-value="results[index-1].strDrink.toLowerCase().replace(/\s/g, '_')"
        />
      </div>
      <div class="text-center">
        <button
          type="button"
          id="showmore-button"
          class="mx-auto mb-4 btn btn-secondary search-btn"
          @click="showMore"
        >Show More</button>
      </div>
    </template>
  </div>
</template>

<script>
import axios from "axios";
import { globalState } from "../main.js";

export default {
  name: "ResultCard",
  data() {
    return {
      results: globalState.results,
      numOfResults: 5
    };
  },
  created() {
    console.log(globalState.results);
  },
  methods: {
    showMore: function() {
      if (this.numOfResults + 5 < this.results.length) {
        this.numOfResults += 5;
      } else {
        this.numOfResults += this.results.length - this.numOfResults;
        document.getElementById("showmore-button").disabled = true;
      }
    },
    selectDrink: async function(event) {
      let queryURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${event.target.getAttribute('data-value')}`;
      const result = await axios.get(queryURL);
      globalState.result = result.data.drinks;
      console.log(result);
      this.$router.push("results");
    }
  }
};
</script>

<style>
.result-card {
  width: 70%;
}

.result-img {
  width: 33%;
  border-radius: 50%;
}
</style>