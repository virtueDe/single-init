<template>
  <div id="app">
    <!-- <router-view/> -->
    <Layouts />
  </div>
</template>

<script lang="ts">
import Layouts from "@/layouts/index.vue";

import { Vue, Component } from "vue-property-decorator";

@Component({
  components: {
    Layouts
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
