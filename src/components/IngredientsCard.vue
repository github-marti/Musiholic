<template>
  <div>
    <ul class="ingredients-list list-group-flush mx-auto px-0" v-for="ingredient in ingredients" :key="ingredient">
      <li class="list-group-item">{{ ingredient }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "IngredientsCard",
  props: ["ingredients"]
};
</script>

<style>
.ingredients-list {
  width: 50%;
}
</style>