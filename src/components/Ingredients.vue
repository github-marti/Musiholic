<template>
  <div class="ingredients mx-auto">
    <p class="title mb-1 p-1 mb-3 font-bold quicksand">Leave it to me:</p>
    <div class="ingredients-card card position-relative p-3 font-black">
      <div class="card-title py-2 position-absolute text-center">
        <p class="mb-1 inline font-black">
          <strong>Pick your poison</strong>
        </p>
        <div class="dropdown ml-3 inline">
          <b-form-select class="m-md-2 font-black" v-model="selected.drink">
            <template v-slot:first>
              <b-form-select-option :value="null" disabled>-- Alcohol --</b-form-select-option>
            </template>
            <b-form-select-option
              class="dropdown-item"
              v-for="drink in drinks"
              :value="drink.name.toLowerCase().replace(/\s/g, '_')"
              :key="drink.id"
            >{{drink.name}}</b-form-select-option>
          </b-form-select>
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
import axios from "axios";
import { globalState } from "../main.js";

export default {
  name: "Ingredients",
  data() {
    return {
      drinks: ingredients.drinks,
      addons: {
        group1: ingredients.addons.group1,
        group2: ingredients.addons.group2
      },
      selected: {
        drink: "",
        addons: []
      }
    };
  },
  methods: {
    check: function(event) {
      if (
        this.selected.addons.indexOf(event.target.value.replace(/\s/g, "_")) ===
        -1
      ) {
        this.selected.addons.push(event.target.value.replace(/\s/g, "_"));
      } else {
        this.selected.addons = this.selected.addons.filter(
          x => x !== event.target.value.replace(/\s/g, "_")
        );
      }
    },
    submit: async function() {
      let ingredients = [this.selected.drink, ...this.selected.addons].join();
      let queryURL = `https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${ingredients}`;
      const results = await axios.get(queryURL);
      globalState.results = results.data.drinks;
      this.$router.push("search");
    }
  }
};
</script>

<style>
.ingredients {
  width: 90%;
  margin-bottom: 30px;
}

.ingredients-card {
  background: #4dd5be;
  color: black;
  font-size: 1em;
}

.dropdown button {
  background: white;
  border: 1px solid #ccc;
}

.dropdown-item {
  font-size: 0.8em;
}

.checkbox-container {
  margin-top: 60px;
  font-size: 1.2em;
  display: flex;
  justify-content: space-evenly;
}

.custom-select {
  font-size: .6em;
}

input[type="checkbox"] {
  border: 1px solid #ccc;
  background: white;
}

label {
  font-family: "Quicksand", sans-serif;
}

.search-btn {
  width: 30%;
  justify-content: space-between;
}
</style>