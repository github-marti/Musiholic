<template>
  <div>
    <div class="result-card card mx-auto my-3 p-3 text-center">
      <h3>{{ this.drinkName }}</h3>
      <img
        class="result-img mx-auto"
        :src="this.drinkImg"
        :data-value="this.drinkName.toLowerCase().replace(/\s/g, '_')"
        @click="this.selectDrink"
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
}
</style>