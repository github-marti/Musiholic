<template>
  <div class="search mx-auto">
    <p class="title mb-1 p-1 mb-3 font-bold quicksand">Looking for something in particular?</p>
    <div class="card search-card position-relative p-3 font-black">
      <div class="card-title py-2 position-absolute text-center">
        <strong>Enter your drink here:</strong>
      </div>
      <div class="drink-input input-group">
        <input
          type="text"
          id="drink-search"
          class="form-control"
          @input="handleInputChange"
          placeholder="Drink name"
          aria-label="Drink-name"
          aria-describedby="basic-addon1"
        />
      </div>
      <button
        type="button"
        class="mx-auto mt-3 btn btn-secondary search-btn"
        @click="handleSubmit"
      >Search</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { globalState } from '../main'

export default {
  name: "Specific",
  data() {
    return {
      searchTerm: ""
    };
  },
  methods: {
    handleInputChange: function() {
      this.searchTerm = document
        .getElementById("drink-search")
        .value.toLowerCase();
    },
    handleSubmit: async function() {
      let queryURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.searchTerm}`;
      const results = await axios.get(queryURL);
      globalState.results = results.data.drinks;
      console.log(results.data);
      this.$router.push("search");
    }
  }
};
</script>

<style>
.search {
  width: 90%;
  margin-bottom: 30px;
}

.search-card {
  background: #4dd5be;
  color: black;
}

.inline {
  display: inline-block;
}

.drink-input {
  margin-top: 40px;
}
</style>