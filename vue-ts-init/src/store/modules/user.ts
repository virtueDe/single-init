import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule
} from "vuex-module-decorators";
import store from "@/store/store";
import { IUser } from "@/interface/user";

@Module({ dynamic: true, store, name: "user" })
class UserModule extends VuexModule implements IUser {
  name = "Admin";
  photo =
    "https://bigshowcdn.cmcm.com/upload/image/20200821/emdI3VeT999416.png";

  get reverseName() {
    return this.name
      .split("")
      .reverse()
      .join("");
  }
  @Mutation
  SET_NAME(name: string) {
    this.name = name;
  }
  @Action
  setName(name: string) {
    this.context.commit("SET_NAME", name);
  }
}

export default getModule(UserModule);
