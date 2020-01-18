<template>
  <div>
    <div class="result-card card mx-auto my-3 p-3 text-center">
      <h3 class="quicksand">{{ drinkName }}</h3>
      <img
        class="result-img mx-auto"
        :src="drinkImg"
        :data-value="drinkName.toLowerCase().replace(/\s/g, '_')"
        @click="selectDrink"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ResultCard",
  props: ["drinkName", "drinkImg", "selectDrink"]
};
</script>

<style>
.result-card {
  width: 70%;
}

.result-img {
  width: 33%;
  border-radius: 50%;
  border: 6px solid black;
}

.result-img:hover {
  cursor: pointer;
}
</style>