<template>
  <Layout>
    <div class="mx-auto mt-2 p-3 about">
    <p class="quicksand">
      Looking for the perfect cocktail and music combination? Sit back, relax, and open this app! Input your favorite ingredients and pick one of the available drink recipes, and Musi-Holic will recommend a song for you based on your drink of choice.
    </p>
    </div>
    <Ingredients />
    <Search />
  </Layout>
</template>

<script>
import Ingredients from '../components/Ingredients'
import Search from '../components/Search'
export default {
  metaInfo: {
    title: 'musiholic'
  },
  components: {
    Ingredients,
    Search
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Quicksand&display=swap');

.quicksand {
  font-family: 'Quicksand', sans-serif;
}
.home-links a {
  margin-right: 1rem;
}

.about {
  width: 90%;
  color: black;
  text-align: center;
}

.title {
  font-size: 1.4em;
  font-family: "Quicksand", sans-serif;
}

.card-title {
  background: rgba(0,0,0,.125);
  top: 0;
  left: 0;
  right: 0;
}
</style>
