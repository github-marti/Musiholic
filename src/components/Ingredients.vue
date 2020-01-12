<template>
  <div class="ingredients mx-auto">
    <p class="title mb-1 p-2 font-bold">Leave it to me:</p>
    <div class="card position-relative p-3">
      <div class="card-title py-2 position-absolute text-center">
        <p class="mb-1 inline">
          <strong>Pick your poison</strong>
        </p>
        <div class="dropdown ml-3 inline">
          <button
            class="btn dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Base Alcohol</button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a
              class="dropdown-item"
              href="#"
              v-for="drink in drinks"
              :key="drink.id"
              v-on:click="select"
            >
              <span>{{drink.name}}</span>
            </a>
          </div>
        </div>
      </div>
      <div class="checkbox-container">
        <div class="group1">
          <div class="checkbox" v-for="addon in addons.group1" :key="addon.id">
            <input
              type="checkbox"
              class="checkbox-item"
              v-bind:value="addon.name"
              v-on:click="check"
            />
            <label class="px-1">{{ addon.name }}</label>
          </div>
        </div>
        <div class="group2">
          <div class="checkbox" v-for="addon in addons.group2" :key="addon.id">
            <input
              type="checkbox"
              class="checkbox-item"
              v-bind:value="addon.name"
              v-on:click="check"
            />
            <label class="px-1">{{ addon.name }}</label>
          </div>
        </div>
      </div>
      <button type="button" class="mx-auto mt-3 btn btn-secondary search-btn" @click="submit">Search</button>
    </div>
  </div>
</template>

<script>
import ingredients from "../utils/ingredients";
import axios from 'axios';
import { globalState } from '../main.js';

export default {
  name: "Ingredients",
  data() {
    return {
      drinks: ingredients.drinks,
      addons: {
        group1: ingredients.addons.group1,
        group2: ingredients.addons.group2
      }
    };
  },
  created() {
      globalState.selected = {
        drink: '',
        addons: []
      };
  },
  methods: {
    select: function(event) {
      document.getElementById("dropdownMenuButton").textContent =
        event.target.textContent;
      globalState.selected.drink = event.target.textContent.replace(/\s/g, "_");
    },
    check: function(event) {
      if (globalState.selected.addons.indexOf(event.target.value.replace(/\s/g, "_")) === -1) {
        globalState.selected.addons.push(event.target.value.replace(/\s/g, "_"));
      } else {
        globalState.selected.addons = globalState.selected.addons.filter(
          x => x !== event.target.value.replace(/\s/g, "_")
        );
      };
    },
    submit: async function() {
      let ingredients = [globalState.selected.drink, ...globalState.selected.addons].join();
      let queryURL = `https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${ingredients}`;
      const results = await axios.get(queryURL);
      globalState.results = results.data.drinks;
      console.log(results.data);
      this.$router.push('search');
    }
  }
};
</script>

<style>

.ingredients {
  width: 85%;
  margin-bottom: 30px;
}

.dropdown button {
  background: white;
  border: 1px solid #ccc;
  font-size: 0.8em;
}

.dropdown-item {
  font-size: 0.8em;
}

.checkbox-container {
  margin-top: 60px;
  display: flex;
  justify-content: space-evenly;
}

input[type=checkbox] {
  border: 1px solid #ccc;
  background: white;
}

label {
  font-family: 'Quicksand', sans-serif;
}

.search-btn {
  width: 30%;
  justify-content: space-between;
}
</style>