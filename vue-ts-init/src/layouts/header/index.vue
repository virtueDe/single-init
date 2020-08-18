<template>
  <div class="app-header">
    <div class="header-title">{{ appName }}</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class Header extends Vue {
  @Prop({ default: "XX平台", type: String }) appName!: string;
}
</script>

<style lang="scss" scoped>
.app-header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 45px;
  background-color: #0e96f2;
  display: flex;
  .header-title {
    width: 156px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: 500;
    letter-spacing: 3px;
  }
}
</style>
