<template>
  <div class="home">
    <el-calendar v-model="value"></el-calendar>
    <el-button type="primary" @click="clickFullScreen">全屏</el-button>
    <!--    <img src="@img/portrait.png" alt="" />-->
    <!--    <span @click="clickSpan">click me</span>-->
    <!--    <span>{{ obj.num }}</span>-->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { IdentityClass, FullScreen } from "./classCase";

interface Iobj<S, N> {
  label: S;
  value: N;
}
interface ILength {
  length: number;
}

@Component({})
export default class Home extends Vue {
  obj = {
    num: 0,
    str: "look me"
  };
  value = new Date();

  clickSpan(): void {
    this.obj.num += 1;
  }

  clickFullScreen(): void {
    new FullScreen(this.$el).viewFullScreen();
  }

  returnObj<S extends ILength, N>(label: S, value: N): Iobj<S, N> {
    console.log(label.length);
    return {
      label,
      value
    };
  }

  getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
  }

  mounted(): void {
    console.log(this.returnObj("age", 123));
    console.log(new IdentityClass(123).getIdentity());
    console.log(this.getProperty(this.obj, "str"));
  }
}
</script>

<style lang="scss" scoped>
.home {
  background: #ffffff;
  box-sizing: border-box;
  padding: 10px;
}
</style>
