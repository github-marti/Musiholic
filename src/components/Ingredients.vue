<template>
  <div class="ingredients mx-auto">
    <p class="title mb-1 p-2 font-italic">Let me make you something to drink...</p>
    <div class="card p-3">
      <div class="mx-auto choose-alochol">
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
      <div class="checkbox-container mt-4">
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
          drink: '',
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
            this.selected.addons = this.selected.addons.filter(x => x !== event.target.value);
        };
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

.checkbox-container {
  display: flex;
  justify-content: space-evenly;
}
</style>