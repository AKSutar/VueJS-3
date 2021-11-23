<template>
  <h2>{{ firstName }} {{ lastName }}</h2>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'DemoTwo',
  setup() {
    /* Down reference is stored in a constant & this is good practise to set the const name to state */
    const state = reactive({
      firstName: 'Bruce',
      lastName: 'Wayne',
    })

    setTimeout(() => {
      state.firstName = 'Clark'
      state.lastName = 'Kent'
      console.log(state)
    }, 5000)
    return toRefs(state) /* We use toRefs func to change the indivisual property present inside the reactive state object */
                         /* toRefs func preserves the reactivity for the indivisual property present inside the state object */
  },
}
</script>

<style scoped>
</style>