<template>
  <div class="song-card mx-auto my-3 text-center d-flex flex-row">
    <div class="artist-img">
      <img :src="artistImg" />
    </div>
    <div class="song-info p-3 mx-auto">
      <p class="prompt song-title mb-0">{{ songTitle.toUpperCase() }}</p>
      <p class="quicksand artist-name">by {{ artistName }}</p>
    </div>
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
      alcohol: "",
      genre: "",
      genreId: 0,
      songTitle: "",
      artistName: "",
      artistImg: "",
      artistId: 0
    };
  },
  created() {
    this.alcohols = alcohol.drinks.filter(e =>
      globalState.ingredients
        .map(d => d.name.toLowerCase())
        .includes(e.name.toLowerCase())
    );
    this.selectAlcohol();
  },
  methods: {
    selectAlcohol: function() {
      // choose a random alcohol from those included in drink ingredients
      const randomAlcohol = this.alcohols[
        Math.floor(Math.random() * this.alcohols.length)
      ];
      this.alcohol = randomAlcohol;
      this.selectGenre();
    },
    selectGenre: function() {
      // choose a random genre based on the alcohol choice
      const randomGenre = this.alcohol.genreId[
        Math.floor(Math.random() * this.alcohol.genreId.length)
      ];
      // set the genre as the name, rather than the id, by going through the music util
      this.genre = music.genres.find(e => e.genreId === randomGenre).name;
      this.genreId = randomGenre;
      this.selectArtist();
    },
    selectArtist: async function() {
      // get artists of the chosen genre
      const artists = await axios({
        async: true,
        crossDomain: true,
        url: `https://deezerdevs-deezer.p.rapidapi.com/genre/${this.genreId}/artists`,
        method: "GET",
        headers: {
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          "x-rapidapi-key": "7c559106demsh3b5d953d593cadap18d2cajsn4da17557f40c"
        }
      });
      // choose a random artist from the artist list
      const randomArtist =
        artists.data.data[Math.floor(Math.random() * artists.data.data.length)];
      // set the artist name, id and image based on the randomly chosen artist
      this.artistName = randomArtist.name;
      this.artistImg = randomArtist.picture_medium;
      this.artistId = randomArtist.id;
      this.selectSong();
    },
    selectSong: async function() {
      // get songs from the selected artist
      const songs = await axios({
        async: true,
        crossDomain: true,
        url: `https://deezerdevs-deezer.p.rapidapi.com/search?q=${this.artistName}`,
        method: "GET",
        headers: {
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          "x-rapidapi-key": "7c559106demsh3b5d953d593cadap18d2cajsn4da17557f40c"
        }
      });
      // select random song from api response
      const randomSong =
        songs.data.data[Math.floor(Math.random() * songs.data.data.length)];
      // set song name and preview based on the rnadomly chosen song
      this.songTitle = randomSong.title;
      this.preview = randomSong.preview;
      console.log(this.songTitle, this.artistName, this.genre);
    }
  }
};
</script>

<style>
.song-card {
  width: 80%;
  background: #4dd5be;
  color: black;
}

.artist-img>img {
  height: 180px;
  margin: 0;
  float: left;
}

.song-title {
    font-size: 4vw;
}
</style>