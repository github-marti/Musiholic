<template>
  <div class="search mx-auto">
    <p class="title mb-1 p-2 font-bold">Looking for something in particular?</p>
    <div class="card position-relative p-3">
      <div class="card-title py-2 position-absolute text-center">
        <strong>Enter your drink here:</strong>
      </div>
      <div class="drink-input input-group">
        <input
          type="text"
          class="form-control"
          placeholder="Drink name"
          aria-label="Drink-name"
          aria-describedby="basic-addon1"
        />
      </div>
      <button type="button" class="mx-auto mt-3 btn btn-secondary search-btn">Search</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search"
};
</script>

<style>
.search {
  width: 85%;
}

.inline {
  display: inline-block;
}

.drink-input {
  margin-top: 40px; 
}
</style>