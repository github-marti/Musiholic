<template>
  <Layout>
    <About />
    <Ingredients />
    <Search />
    <Random />
  </Layout>
</template>

<script>
import About from '../components/About'
import Ingredients from '../components/Ingredients'
import Search from '../components/Search'
import Random from '../components/Random'
export default {
  metaInfo: {
    title: 'musiholic'
  },
  components: {
    About,
    Ingredients,
    Search,
    Random
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

.inline {
  display: inline-block;
}
</style>
