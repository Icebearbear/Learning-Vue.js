<template>
  <div id="app">
    <Apphome v-bind:foods="foods" />

    <!-- retrieve data from array -->
    <h1 class="text">What have you eat today?</h1>
  </div>
</template>


<script>
import Apphome from "./components/AppHome.vue";

export default {
  name: "app",
  components: {
    Apphome
  },
  data() {
    return {
      foods: [
        { id: 1, name: "cheese", au: "lel" },
        { id: 2, name: "choco", au: "lol" },
        { id: 3, name: "cream", au: "lal" }
      ] //array of objects
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
