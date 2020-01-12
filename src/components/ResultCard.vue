<template>
  <div>
    <div class="result-card card mx-auto my-3 p-3" v-for="result in results">
      <h3>{{ result.strDrink }}</h3>
      <img :src="result.strDrinkThumb">
    </div>
  </div>
</template>

<script>
import { globalState } from "../main.js";

export default {
  name: "ResultCard",
  data() {
      return {
          results: globalState.results
      }
  }
};
</script>

<style>
    .result-card {
        width: 70%;
    }
</style>