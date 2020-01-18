<template>
  <Layout>
    <DrinkCard />
  </Layout>
</template>

<script>
import DrinkCard from "../components/DrinkCard";
import { globalState } from "../main";

export default {
  metaInfo: {
    title: "musiholic"
  },
  components: {
    DrinkCard
  }
};
</script>