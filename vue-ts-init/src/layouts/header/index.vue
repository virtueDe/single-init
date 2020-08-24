<template>
  <div class="app-header">
    <div class="header-title">{{ appName }}</div>
    <div class="header-user" @click="clickUserInfo">
      <img :src="photo" alt="头像" />
      <span v-if="isShowUserName">{{ name }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Vue,
  Component,
  Prop,
  Emit,
  Model,
  Watch
} from "vue-property-decorator";
import { UserModule } from "@/store";

// import portrait from "@img/portrait.png";
// import { IUser } from "@/interface/user";

@Component({})
export default class Header extends Vue {
  @Prop({ default: "XX平台", type: String, required: true })
  readonly appName!: string;

  @Prop({ type: Boolean, default: true }) readonly value!: boolean;

  @Model() isShowUserName!: boolean;

  @Watch("isShowUserName", { immediate: true, deep: true })
  onShowName(value: boolean) {
    console.log(value);
  }

  get name(): string {
    return UserModule.name;
  }
  get photo(): string {
    return UserModule.photo;
  }

  @Emit("click")
  clickUserInfo() {
    return UserModule;
  }
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
  justify-content: space-between;
  .header-title {
    width: 156px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: 500;
    letter-spacing: 3px;
  }
  .header-user {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.25s;
    box-sizing: border-box;
    padding: 0 8px;
    margin-right: 20px;
    &:hover {
      background-color: rgba(255, 255, 255, 0.15);
    }
    & > img {
      width: 30px;
      height: 30px;
    }
    & > span {
      padding-left: 7px;
      color: white;
    }
  }
}
</style>
