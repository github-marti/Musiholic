<template>
  <div>
    <div class="song-card mx-auto my-3 d-flex flex-row flex-wrap">
      <div class="artist-img flex-shrink-1">
        <img :src="artistImg" />
      </div>
      <div class="song-info flex-fill p-3 mx-auto text-center">
        <p class="quicksand song-title mb-0">{{ songTitle }}</p>
        <p class="quicksand artist-name">by {{ artistName }}</p>
        <audio ref="player" class="song-preview" controls>
          <source :src="preview" />
        </audio>
        <p class="quicksand">
          Find this song on
          <a
            target="_blank"
            :href="`https://open.spotify.com/search/${songTitle.toLowerCase().replace(/\s/g, '%20')}`"
          >Spotify</a>
        </p>
      </div>
    </div>
    <div class="text-center">
      <button class="nxt-song-btn px-2 prompt my-3" @click="nextSong">NEXT</button>
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
      artistId: 0,
      preview: ""
    };
  },
  created() {
    if (globalState.selectedGenre) {
      this.genreId = globalState.selectedGenre;
      this.selectArtist();
    } else {
      this.alcohols = alcohol.drinks.filter(e =>
        globalState.ingredients
          .map(d => d.name.toLowerCase())
          .includes(e.name.toLowerCase())
      );
      this.selectAlcohol();
    }
  },
  mounted: function() {
    this.$watch("preview", function() {
      this.$refs.player.load();
    });
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
      console.log(this.songTitle, this.artistName, this.genre, this.preview);
    },
    nextSong: function() {
      if (globalState.selectedGenre) {
        this.selectArtist();
      } else {
        this.selectAlcohol();
      }
    }
  }
};
</script>

<style>
.song-card {
  width: 100%;
  background: #4dd5be;
  color: black;
}

.artist-img > img {
  max-width: 100%;
  min-width: 150px;
  margin: 0;
  object-fit: contain;
  overflow: hidden;
}

.song-title {
  font-size: 4vw;
}

.song-preview {
  width: 100%;
}

.nxt-song-btn {
  font-size: 2em;
}

@media screen and (max-width: 600px) {
  .song-card {
    -webkit-box-orient: vertical !important;
    -webkit-box-direction: normal !important;
    flex-direction: column !important;
  }

  .artist-img {
    margin: auto;
  }

  .artist-img > img {
    margin-top: 15px;
    max-height: 200px;
    border-radius: 50%;
    border: 6px solid black;
  }
}
</style>