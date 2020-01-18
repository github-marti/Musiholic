<template>
  <div class="drink-card card mx-auto my-3 p-3 text-center">
    <h3>{{ drink.strDrink }}</h3>
    <img class="drink-img my-3 mx-auto" :src="drink.strDrinkThumb" />
    <IngredientsCard :ingredients="ingredients" />
  </div>
</template>

<script>
import { globalState } from "../main";
import IngredientsCard from "./IngredientsCard";

export default {
  name: "DrinkCard",
  data() {
    return {
      drink: globalState.selectedDrink,
      ingredients: []
    };
  },
  created() {
    let i = 1;
    while (this.drink[`strIngredient${i}`]) {
      this.ingredients.push({
        name: this.drink[`strIngredient${i}`],
        measure: this.drink[`strMeasure${i}`]
      });
      i++;
    }
    return this.ingredients;
  },
  components: {
    IngredientsCard
  }
};
</script>
    
<style>
.drink-card {
  width: 70%;
}

.drink-img {
  width: 40%;
}
</style>