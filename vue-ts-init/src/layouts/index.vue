<template>
  <div class="app-layouts">
    <app-header
      :appName="appName"
      @click="clickUseInfo"
      v-model="isShowUserName"
    />
    <app-left />
    <app-main />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import AppHeader from "./header/index.vue";
import AppLeft from "./left/index.vue";
import AppMain from "./main/index.vue";
import { IUser } from "@/interface/user";

interface INewUser extends IUser {
  reverseName: string;
  setName(value: string): void;
}
@Component({
  components: {
    AppHeader,
    AppLeft,
    AppMain
  }
})
export default class Layouts extends Vue {
  appName = "平台名字";
  isShowUserName = true;
  clickUseInfo(value: INewUser) {
    value.setName(value.reverseName);
  }
}
</script>

<style lang="scss" scoped>
.app-layouts {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
