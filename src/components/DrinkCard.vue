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
      ingredients: [],
      instructions: globalState.selectedDrink.strInstructions
    };
  },
  created() {
    console.log(this.drink);
    let i = 1;
    while (this.drink[`strIngredient${i}`]) {
      this.ingredients.push({
        id: i,
        name: this.drink[`strIngredient${i}`],
        measure: this.drink[`strMeasure${i}`]
      });
      i++;
    }
    return this.ingredients;
  },
  components: {
    IngredientsCard,
    InstructionsCard
  }
};
</script>
    
<style>
.drink-card {
  width: 70%;
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