<template>
  <Layout>
    <template v-if="display === 'main'">
      <About />
      <Ingredients />
      <Specific />
      <Random />
    </template>
  </Layout>
</template>

<script>
import About from '../components/About'
import Ingredients from '../components/Ingredients'
import Specific from '../components/Specific'
import Random from '../components/Random'
export default {
  metaInfo: {
    title: 'musiholic'
  },
  components: {
    About,
    Ingredients,
    Specific,
    Random
  },
  data() {
    return {
      display: 'main'
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Quicksand&display=swap');

body {
  background: black;
  color: white;
}

.quicksand {
  font-family: 'Quicksand', sans-serif;
}

.prompt {
  font-family: 'Prompt', sans-serif;
}

.font-black {
  color: black;
}

.home-links a {
  margin-right: 1rem;
}

.about {
  width: 90%;
  text-align: center;
}

.title {
  font-size: 1.8em;
  color: #4dd5be;
}

.card {
  border-style: none;
  border-radius: 0;
}

.btn-secondary {
  background: black;
}

.card-title {
  background: #4dd5be;
  top: 0;
  left: 0;
  right: 0;
}

.inline {
  display: inline-block;
}
</style>
