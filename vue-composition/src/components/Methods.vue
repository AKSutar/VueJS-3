<!-- This is how we replace methods option with composition API -->
<!-- Define function within the setup method & simply return it to use it in the template -->
<template>
  <!-- Options API -->
  <h2>{{ name }}</h2>
  <button @click="setName">Set Name</button>

  <!-- ref -->
  <h2>{{ count }}</h2>
  <button @click="incrementCount">Increment Count</button>

  <!-- reactive -->
  <h2>{{ first }} {{ last }}</h2>
  <button @click="changeHero">Change Hero</button>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'
export default {
  name: 'Methods',
  /* setup() is the entry point for the composition API */
  setup() {
    const count = ref(0)
    /* In down function we define the click handler incrementCount inside the setup method & define it as a function. Within the function we increse the count value */
    /* Here we successfully replace the methods option with the composition API */
    function incrementCount() {
      count.value++
    }

    /* This is called grouping by features as ref & reactive function are written next to each other  */
    const state = reactive({
      first: 'Bruce',
      last: 'Wayne',
    })
    function changeHero() {
      state.first = 'Clark'
      state.last = 'Kent'
    }

    return {
      count,
      incrementCount,
      ...toRefs(state), /* Here we have spread the state as reactive reference using toRefs function */
                        /* This allow us to bind first & last to the template without having to use state dot */
      changeHero,
    }
  },
  data() {
    return {
      name: 'Vishwas',
    }
  },
  methods: {
    setName() {
      this.name = 'Codevolution'
    },
  },
}
</script>

<style scoped>
</style>