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
        :key="result.idDrink"
      >
        <h3>{{ result.strDrink }}</h3>
        <img class="result-img mx-auto" :src="result.strDrinkThumb" />
      </div>
    </template>
    <template v-else>
      <div
        class="result-card card mx-auto my-3 p-3 text-center"
        v-for="index in numOfResults"
        :key="results[index-1].idDrink"
      >
        <h3>{{ results[index-1].strDrink }}</h3>
        <img class="result-img mx-auto" :src="results[index-1].strDrinkThumb" />
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
        this.numOfResults += (this.results.length - this.numOfResults);
        document.getElementById('showmore-button').disabled = true;
      }
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
}
</style>