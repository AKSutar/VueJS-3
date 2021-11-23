<!-- Here we will replace the computed option with the composition API -->
<template>
  <div>
    <!-- Options API -->
    <input type="text" placeholder="First Name" v-model="fName" />
    <input type="text" placeholder="Last Name" v-model="lName" />
    <h2>Options Fullname is {{ fullName }}</h2>

    <!-- ref -->
    <input type="text" placeholder="First Name" v-model="refFirstName" />
    <input type="text" placeholder="Last Name" v-model="refLastName" />
    <!-- Down we call the full name with is computed from the above two properties -->
    <!-- We use computed function from the composition API to bind the computed properties -->
    <h2>ref Fullname is {{ refFullName }}</h2> 

    <!-- reactive -->
    <input type="text" placeholder="First Name" v-model="reactiveFirstName" />
    <input type="text" placeholder="Last Name" v-model="reactiveLastName" />
    <h2>reactive Fullname is {{ reactiveFullName }}</h2>
  </div>
</template>

<script>
/* STEPS to apply computed API instead of computed properties */
/* Import computed from vue & then within the setup method call the computed function */
/* NOTE - Just like refs computed propeties also needed to be accessed dot.value within the setup function, but within the template vue will unpack the value for us  */
import { ref, reactive, toRefs, computed } from 'vue'
export default {
  name: 'Computed',
  setup() {
    const refFirstName = ref('')
    const refLastName = ref('')

    const state = reactive({
      reactiveFirstName: '',
      reactiveLastName: '',
    })

    /* Computed function accepts a function as its argument which return a computed value */
    /* We need .value since its created using ref function */
    /* Once we made the computed composition API simply return it to use it in the template */
    const refFullName = computed(function () {
      return `${refFirstName.value} ${refLastName.value}`
    })

    /* Here we dont need dot.value since it is created using the reactive function  */
    const reactiveFullName = computed(function () {
      return `${state.reactiveFirstName} ${state.reactiveLastName}`
    })

    return {
      refFirstName,
      refLastName,
      refFullName,
      ...toRefs(state),
      reactiveFullName,
    }
  },
  data() {
    return {
      fName: '',
      lName: '',
    }
  },
  computed: {
    fullName() {
      return `${this.fName} ${this.lName}`
    },
  },
}
</script>

<style scoped>
</style>