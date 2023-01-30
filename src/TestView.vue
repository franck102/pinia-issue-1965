<template>
  <div> <button type="button" @click="testStore.refreshTestData()">REFRESH PASSES</button>
    Count: {{ testData?.count }}
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia"
import { useTestStore } from "./stores/testStore"

const testStore = useTestStore()
const { testData } = storeToRefs(testStore)
</script>