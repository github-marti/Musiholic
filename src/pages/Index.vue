<template>
  <Layout>
    <div class="mx-auto p-3 about">
    <p>
      Looking for the perfect cocktail and music combination? Sit back, relax, and open this app! Input your favorite ingredients and pick one of the available drink recipes, and Musi-Holic will recommend a song for you based on your drink of choice.
    </p>
    </div>
    <Ingredients />
  </Layout>
</template>

<script>
import Ingredients from '../components/Ingredients'
export default {
  metaInfo: {
    title: 'musiholic'
  },
  components: {
    Ingredients
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

.about {
  width: 90%;
  color: black;
  text-align: center;
}
</style>
