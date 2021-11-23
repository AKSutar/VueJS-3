<template>
  <h2>Child Component C</h2>
  <h3>Child Component C username - {{ userName }}</h3>
  <h3>Child Component C composition username - {{ childUserName }}</h3>
  <h3>Child Component C count - {{ childCount }}</h3>
  <h3>Child Component C hero - {{ firstName }} {{ lastName }}</h3> <!-- childHero -->
  <button @click="incrementCount">Increment count from child</button>
</template>

<script>
import { inject, toRefs } from 'vue'
export default {
  name: 'ChildC',
  /* Here will inject the value from parent component using the inject function from vue */
  /* First argument to inject is the label of the value that is provided */
  /* Second argument is optional & is default value if no value been provided from the parent component */
  setup() {
    const childUserName = inject('c_userName', 'Default username') /* Default value provided to the inject function */
    const childCount = inject('c_count', 0)
    const childHero = inject('c_hero', {})
    const incrementCount = inject('incrementCount')

    return {
      childUserName,
      childCount,
      ...toRefs(childHero),
      incrementCount,
    }
  },
  inject: ['userName'],
}
</script>

<style scoped>
</style>