<template>
  <div class="app-header"></div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
.app-header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 45px;
  background-color: #0e96f2;
}
</style>
