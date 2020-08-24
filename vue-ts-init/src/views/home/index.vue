<template>
  <div class="home">
    <span @click="clickSpan">click me</span>
    <div>{{ obj.num }}</div>
    <img src="@img/portrait.png" alt="" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

// interface Person {
//   num: number;
//   str: string;
//   age?: number;
//   readonly gender: string;
// }
// interface Account extends Person {
//   nickName?: string;
// }
// interface SearchFunc {
//   (source: string, subString: string): boolean;
// }
// enum Color {
//   red,
//   yellow,
//   green,
//   blue
// }
@Component({})
export default class Home extends Vue {
  obj = {
    num: 0,
    str: "look me"
  };
  clickSpan(): void {
    this.obj.num += 1;
  }
  mounted(): void {
    // const tom: [string, number] = ["123", 123];
    // const colorBlue: Color = Color.blue;
  }
}
</script>

<style lang="scss" scoped></style>
