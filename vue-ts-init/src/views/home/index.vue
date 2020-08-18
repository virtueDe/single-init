<template>
  <div class="home">
    <span @click="clickSpan(obj)">click me</span>
    <div>{{ obj.num }}</div>
    <div>{{ obj.str }}</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

interface Person {
  num: number;
  str: string;
  age?: number;
  readonly gender: string;
}
interface Account extends Person {
  nickName?: string;
}
interface SearchFunc {
  (source: string, subString: string): boolean;
}
enum Color {
  red,
  yellow,
  green,
  blue
}
@Component({})
export default class Home extends Vue {
  obj = {
    num: 0,
    str: "look me"
  };
  clickSpan(obj: Person): void {
    obj.num += 1;
    obj.str = obj.str
      .split("")
      .reverse()
      .join("");

    const newObj: Account = {
      num: 123,
      str: "1231",
      age: 123,
      gender: "male"
    };
    console.log(newObj);
  }
  getString(something: string | number): string {
    return something.toString();
  }
  mounted(): void {
    const tom: [string, number] = ["123", 123];
    console.log(tom);
    const colorBlue: Color = Color.blue;
    console.log(colorBlue);
  }
}
</script>

<style lang="scss" scoped></style>
