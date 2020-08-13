<template>
  <div class="app-layouts">
    <app-header />
    <app-left />
    <app-main />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import AppHeader from "./header/index.vue";
import AppLeft from "./left/index.vue";
import AppMain from "./main/index.vue";
@Component({
  components: {
    AppHeader,
    AppLeft,
    AppMain
  }
})
export default class Layouts extends Vue {}
</script>

<style lang="scss" scoped>
.app-layouts {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
