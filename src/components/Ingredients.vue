<template>
  <div class="ingredients mx-auto">
    <p class="title mb-1 p-2 font-italic">Let me make you something to drink...</p>
    <div class="card p-3">
      <p class="mb-1">
        <strong>Pick your poison</strong>
      </p>
      <div class="dropdown">
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
  </div>
</template>

<script>
import ingredients from '../utils/ingredients'

export default {
  name: "Ingredients",
  data() {
    return {
      selected: {},
      drinks: ingredients.drinks
    };
  },
  methods: {
    select: function(event) {
      document.getElementById("dropdownMenuButton").textContent =
        event.target.textContent;
      this.selected.drink = event.target.textContent;
    }
  }
};
</script>

<style>
.title {
  font-size: 1.4em;
}

.ingredients {
  width: 85%;
}

.dropdown button {
  border: 1px solid #ccc;
  font-size: 0.8em;
}

.dropdown-item {
  font-size: 0.8em;
}
</style>