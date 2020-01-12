<template>
  <div>
    <template v-if="results === 'None Found'">
      <div class="result-card card mx-auto my-3 p-3 text-center">
        <h3>We couldn't find any drinks.</h3>
        <g-link to="/"><h4>Try again?</h4></g-link>
      </div>
    </template>
    <template v-else-if="results.length < 5">
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
        v-for="index in 5"
        :key="results[index].idDrink"
      >
        <h3>{{ results[index].strDrink }}</h3>
        <img class="result-img mx-auto" :src="results[index].strDrinkThumb" />
      </div>
      <div class="text-center">
        <button type="button" class="mx-auto mb-4 btn btn-secondary search-btn">Show More</button>
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
      results: globalState.results
    };
  },
  created() {
    console.log(globalState.results);
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