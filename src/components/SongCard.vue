<template>
  <div class="song-card card mx-auto">
    <h3 class="quicksand">Your Song</h3>
  </div>
</template>

<script>
import alcohol from "../utils/ingredients";
import { globalState } from "../main";
export default {
  name: "SongCard",
  data() {
    return {
      alcohols: [],
      songName: "",
      artistName: "",
      image: ""
    };
  },
  created() {
    this.alcohols = alcohol.drinks.filter(e =>
      globalState.ingredients
        .map(d => d.name.toLowerCase())
        .includes(e.name.toLowerCase())
    );
  },
  methods: {
    getSong: function(drink) {
      const random = Math.floor(Math.random() * drinkObject[drink].length);
      const genre = drinkObject[drink][random];
    }
  }
};
</script>

<style>
.song-card {
  width: 80%;
}
</style>