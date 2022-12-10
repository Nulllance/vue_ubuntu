<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <weather id="weather"></weather>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Weather from "./components/Weather.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
    Weather,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 70px;
}
</style>
