<template>
  <div class="random mx-auto">
    <p class="title mb-1 p-2 font-bold">Match your musical mood:</p>
    <div class="genre-container">
        <div class="row">
            <div class="col-6 col-sm-4">
                <div class="genre-block">Rock</div>
            </div>
            <div class="col-6 col-sm-4">
                <div class="genre-block">Pop</div>
            </div>
            <div class="col-6 col-sm-4">
                <div class="genre-block">Hip Hop</div>
            </div>
            <div class="col-6 col-sm-4">
                <div class="genre-block">Country</div>
            </div>
            <div class="col-6 col-sm-4">
                <div class="genre-block">Dance</div>
            </div>
            <div class="col-6 col-sm-4">
                <div class="genre-block">Indie</div>
            </div>
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

.genre-block {
    text-align: center;
    padding: 30px 10px;
    border: 1px solid #ccc;
    margin: 5px 0;
}
</style>