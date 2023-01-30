import { defineStore } from "pinia"
import { ref, watchEffect } from "vue"

export const useTestStore = defineStore("testStore", () => {

  let data = 0
  const refresher = ref(0)
  const testData = ref({})

  watchEffect(() => {
    console.log("Watch effect running " + refresher.value)
    testData.value = { count: data++ }
  })

  const refreshTestData = () => {
    let v = Math.random()
    console.log("Refresher: " + v)
    refresher.value = v
  }

  return { testData, refreshTestData }
})

