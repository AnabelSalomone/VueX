<template>
  <div id="app">
    <selectors name="selectors"/>
  </div>
</template>

<script>
import Selectors from './components/Selectors.vue'

export default {
  name: 'App',
  components: {
    Selectors
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
