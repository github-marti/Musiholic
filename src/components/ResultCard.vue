<template>
  <div>
    <div v-for="result in results">
      <h3>I am a drink</h3>
    </div>
  </div>
</template>

<script>
import { globalState } from "../main.js";

export default {
  name: "ResultCard",
  data() {
      return {
          results: globalState.results
      }
  }
};
</script>