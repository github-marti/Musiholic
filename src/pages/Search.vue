<template>
  <Layout>
    <div v-if="!results">Something went wrong!</div>
    <div v-else-if="results === 'None Found'" class="result-card card mx-auto my-3 p-3 text-center">
      <h3>We couldn't find any drinks.</h3>
      <g-link to="/">
        <h4>Try again?</h4>
      </g-link>
    </div>
    <template v-else>
      <ResultCard
        v-for="index in numOfResults"
        :drink-name="results[index-1].strDrink"
        :drink-img="results[index-1].strDrinkThumb"
        :select-drink="selectDrink"
        :key="results[index-1].idDrink"
      />
      <div v-if="results.length > 5" class="text-center">
        <button
          type="button"
          id="showmore-button"
          class="mx-auto mb-4 btn btn-secondary search-btn"
          @click="showMore"
        >Show More</button>
      </div>
    </template>
  </Layout>
</template>

<script>
import ResultCard from "../components/ResultCard";
import axios from "axios";
import { globalState } from "../main";

export default {
  metaInfo: {
    title: "musiholic"
  },
  components: {
    ResultCard
  },
  data() {
    return {
      results: globalState.results,
      numOfResults:
        globalState.results && globalState.results.length < 5 ? globalState.results.length : 5
    };
  },
  mounted() {
    if (!globalState.results) {
      this.$router.push('/');
    }
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
      let queryURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${event.target.getAttribute(
        "data-value"
      )}`;
      const result = await axios.get(queryURL);
      globalState.selectedDrink = result.data.drinks[0];
      globalState.getIngredients(globalState.selectedDrink);
      this.$router.push("results");
    }
  }
};
</script>