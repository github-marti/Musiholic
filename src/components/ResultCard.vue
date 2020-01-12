<template>
  <div>
    <template v-if="results === 'None Found' || results.length < 5">
      <h3>Less than 5</h3>
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