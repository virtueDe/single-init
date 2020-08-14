<template>
  <div class="app-main">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class Main extends Vue {}
</script>

<style lang="scss" scoped>
.app-main {
  position: absolute;
  top: 45px;
  left: 156px;
  width: calc(100% - 156px);
  height: calc(100% - 45px);
  box-sizing: border-box;
}
</style>
