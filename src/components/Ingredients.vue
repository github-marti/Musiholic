<template>
  <div class="ingredients mx-auto">
    <p class="title mb-1 p-2 font-bold">Leave it to me:</p>
    <div class="card position-relative p-3">
      <div class="alcohol-choice py-2 position-absolute text-center">
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
      <button type="button" class="mx-auto mt-3 btn btn-secondary search-btn">Search</button>
    </div>
  </div>
</template>

<script>
import ingredients from "../utils/ingredients";

export default {
  name: "Ingredients",
  data() {
    return {
      selected: {
        drink: "",
        addons: []
      },
      drinks: ingredients.drinks,
      addons: {
        group1: ingredients.addons.group1,
        group2: ingredients.addons.group2
      }
    };
  },
  methods: {
    select: function(event) {
      document.getElementById("dropdownMenuButton").textContent =
        event.target.textContent;
      this.selected.drink = event.target.textContent.replace(/\s/g, "%20");
    },
    check: function(event) {
      console.log(event.target.value);
      if (this.selected.addons.indexOf(event.target.value) === -1) {
        this.selected.addons.push(event.target.value);
      } else {
        this.selected.addons = this.selected.addons.filter(
          x => x !== event.target.value
        );
      }
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Quicksand&display=swap");

.title {
  font-size: 1.4em;
  font-family: "Quicksand", sans-serif;
}

.ingredients {
  width: 85%;
}

.inline {
  display: inline-block;
}

.alcohol-choice {
  background: rgb(205, 255, 255);
  top: 0;
  left: 0;
  right: 0;
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

.search-btn {
  width: 30%;
  justify-content: space-between;
}
</style>