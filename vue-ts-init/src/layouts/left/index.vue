<template>
  <div class="app-left"></div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class Left extends Vue {}
</script>

<style lang="scss" scoped>
.app-left {
  position: absolute;
  top: 45px;
  left: 0px;
  width: 156px;
  height: calc(100% - 45px);
  background-color: #3c6f91;
}
</style>
