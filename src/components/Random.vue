<template>
  <div class="random mx-auto">
    <p class="title mb-1 p-1 mb-3 font-bold quicksand">Match your musical mood:</p>
    <div class="genre-container">
        <div class="row">
            <div class="col-6 col-sm-4"
                 v-for="genre in genres"
                 :key="genre.id"
                 >
                <div class="genre-block prompt" :style="{ background: genre.background, color: genre.color }">{{genre.name}}</div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import music from '../utils/music'
export default {
  name: "Random",
  data() {
      return {
          genres: music.genres
      }
  }
};
</script>

<style>
.random {
  width: 90%;
  margin-bottom: 30px;
}

.genre-block {
  font-size: 3em;
    text-align: center;
    padding: 30px 10px;
    margin: 5px 0;
}
</style>