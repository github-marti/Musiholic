<template>
  <div class="random mx-auto">
    <p class="title mb-1 p-2 font-bold">Match your musical mood:</p>
    <div class="genre-container">
        <div class="row">
            <div class="col-6 col-sm-4 genre-block">Rock</div>
            <div class="col-6 col-sm-4 genre-block">Pop</div>
            <div class="col-6 col-sm-4 genre-block">Hip Hop</div>
            <div class="col-6 col-sm-4 genre-block">Country</div>
            <div class="col-6 col-sm-4 genre-block">Dance</div>
            <div class="col-6 col-sm-4 genre-block">Indie</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Random"
};
</script>

<style>
.random {
  width: 85%;
}
</style>