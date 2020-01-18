<template>
  <Layout>
    <DrinkCard />
    <SongCard />
  </Layout>
</template>

<script>
import DrinkCard from "../components/DrinkCard";
import SongCard from "../components/SongCard";
import { globalState } from "../main";

export default {
  metaInfo: {
    title: "musiholic"
  },
  components: {
    DrinkCard,
    SongCard
  }
};
</script>