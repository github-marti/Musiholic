<template>
  <div class="random mx-auto">
    <p class="title mb-1 p-1 mb-3 font-bold quicksand">Match your musical mood:</p>
    <div class="genre-container">
      <div class="row">
        <div class="col-6 col-sm-4" v-for="index in 6" :key="genres[index-1].id">
          <div
            class="genre-block prompt"
            :genre="genres[index-1].name"
            :style="{ background: genres[index-1].background, color: genres[index-1].color }"
            @mouseover="onHover"
            @mouseout="offHover"
          >{{genres[index-1].name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import music from "../utils/music";
export default {
  name: "Random",
  data() {
    return {
      genres: music.genres
    };
  },
  methods: {
    onHover: function(event) {
      const genre = event.target.getAttribute('genre');
      const currentGenre = this.genres.find(e => e.name === genre);
      event.target.setAttribute("style", `background: white; color: ${currentGenre.background}`)
    },
    offHover: function(event) {
      const genre = event.target.getAttribute('genre');
      const currentGenre = this.genres.find(e => e.name === genre);
      event.target.setAttribute("style", `background: ${currentGenre.background}; color: ${currentGenre.color}`)
    }
  }
};
</script>

<style>
.random {
  width: 85%;
  margin-bottom: 30px;
}

.genre-container div {
  padding-left: 0;
  padding-right: 0;
}

.genre-block {
  font-size: 5vw;
  text-align: center;
  padding: 30px 10px;
}

.genre-block:hover {
  cursor: pointer;
}
</style>