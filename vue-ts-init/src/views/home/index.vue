<template>
  <div class="home">
    home
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class Home extends Vue {
  private mounted (): void { 
    console.log('生命周期：mounted');
  }
}
</script>

<style lang="scss" scoped></style>
