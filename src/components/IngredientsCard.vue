<template>
  <div>
    <ul
      class="ingredients-list quicksand list-group-flush mx-auto px-0"
      v-for="ingredient in ingredients"
      :key="ingredient.id"
    >
      <li class="list-group-item d-flex justify-content-between align-items-center">
        {{ ingredient.name }}
        <span class="badge badge-pill">{{ ingredient.measure }}</span>
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
  width: 70%;
}

.list-group-item {
  background: black;
  color: #4dd5be;
  border-bottom: 1px solid #4dd5be;
}

.badge {
  background: #4dd5be;
  color: black;
}
</style>