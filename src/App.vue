<script setup lang="ts">
import TestView from "./TestView.vue"
import { useCounter, } from "./stores/testStore";
import {ref} from "vue";

const show = ref(true)
</script>

<template>
  <div><input type="checkbox" v-model="show" :value="true" name="show" checked>
  Show / Hide test component</div>

  <template v-if="show">
    <test-view></test-view>
  </template>

</template>
