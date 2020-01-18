<template>
  <div class="song-card card mx-auto">
    <h3 class="quicksand">Your Song</h3>
  </div>
</template>

<script>
import alcohol from "../utils/ingredients";
import music from "../utils/music";
import { globalState } from "../main";
import axios from "axios";

export default {
  name: "SongCard",
  data() {
    return {
      alcohols: [],
      genre: "",
      songName: "",
      artistName: "",
      artistImg: ""
    };
  },
  created() {
    this.alcohols = alcohol.drinks.filter(e =>
      globalState.ingredients
        .map(d => d.name.toLowerCase())
        .includes(e.name.toLowerCase())
    );
    this.getSong();
  },
  methods: {
    getSong: async function() {
      const randomAlcohol = this.alcohols[
        Math.floor(Math.random() * this.alcohols.length)
      ];
      const randomGenre =
        randomAlcohol.genreId[
          Math.floor(Math.random() * randomAlcohol.genreId.length)
        ];
      this.genre = music.genres.find(e => e.genreId === randomGenre).name;
      const artists = await axios({
        async: true,
        crossDomain: true,
        url: `https://deezerdevs-deezer.p.rapidapi.com/genre/${randomGenre}/artists`,
        method: "GET",
        headers: {
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          "x-rapidapi-key": "7c559106demsh3b5d953d593cadap18d2cajsn4da17557f40c"
        }
      });
      const randomArtist = artists.data.data[Math.floor(Math.random() * artists.data.data.length)];
      this.artistName = randomArtist.name;
      this.artistImg = randomArtist.picture_medium;
      console.log(this.artistName, this.artistImg, this.genre)
    }
  }
};
</script>

<style>
.song-card {
  width: 80%;
}
</style>