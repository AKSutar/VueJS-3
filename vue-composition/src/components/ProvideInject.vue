<!-- ProvideInject is our parent component -->
<template>
  <h3>Parent component {{ name }}</h3>
  <h3>Parent component {{ count }}</h3>
  <h3>Parent component {{ firstName }} {{ lastName }}</h3>
  <button @click="incrementCount">Increment count</button>
  <ChildA />
</template>

<script>
/* To provide a value we use the provide function from vue */
/* The best approach to update the value is always from the parent not from the child component */

import { provide, ref, reactive, toRefs } from 'vue'
import ChildA from './ChildA.vue'
export default {
  components: { ChildA },
  name: 'ProvideInject',
  setup() {
    /* We can also use ref & reactive for the provide & inject */
    /* Since the values are reactive any time the value changes in parent component , value get automatically updated in child component as well */
    const count = ref(0)
    const state = reactive({
      firstName: 'Bruce',
      lastName: 'Wayne',
    })

    /* We can also use provide & inject for the change handler function */
    /* Here we are providing the handler to the child component */
    function incrementCount() {
      count.value++
    }

    /* Within the setup() only we call the provide function */
    /* First argument is the label for the value */
    /* Second argument is the actual value we need to provide */
    /* Now we are providing the value, so in ChildC component we simply inject the value */
    provide('c_userName', 'Codevolution')
    provide('c_count', count)
    provide('c_hero', state)
    provide('incrementCount', incrementCount)

    return {
      count,
      incrementCount,
      ...toRefs(state),
    }
  },
  data() {
    return {
      name: 'Vishwas',
    }
  },
  /* Providing the name data property as username & then in ChildC component which is nested three level inside we inject the value and bind it in template */
  provide() {
    return {
      userName: this.name,
    }
  },
}
</script>

<style scoped>
</style>