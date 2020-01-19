<template>
  <div class="drink-card card mx-auto my-3 p-3 text-center">
    <h3 class="quicksand">{{ drink.strDrink }}</h3>
    <img class="drink-img my-3 mx-auto" :src="drink.strDrinkThumb" />
    <IngredientsCard :ingredients="ingredients" />
    <InstructionsCard :instructions="instructions" />
  </div>
</template>

<script>
import { globalState } from "../main";
import IngredientsCard from "./IngredientsCard";
import InstructionsCard from "./InstructionsCard";

export default {
  name: "DrinkCard",
  data() {
    return {
      drink: globalState.selectedDrink,
      ingredients: globalState.ingredients,
      instructions: globalState.selectedDrink.strInstructions
    };
  },
  components: {
    IngredientsCard,
    InstructionsCard
  }
};
</script>
    
<style>
.drink-card {
  width: 90%;
  background: black;
}

.drink-card>h3 {
  color: #4dd5be;
}

.drink-img {
  width: 40%;
  border-radius: 50%;
  border: 6px solid #4dd5be;
}
</style>