<template>
  <div>
    <ul class="ingredients-list list-group-flush mx-auto px-0" v-for="ingredient in ingredients" :key="ingredient.name">
      <li class="list-group-item d-flex justify-content-between align-items-center">{{ ingredient.name }}
      <span class="badge badge-primary badge-pill">{{ ingredient.measure }}</span>
      </li>
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