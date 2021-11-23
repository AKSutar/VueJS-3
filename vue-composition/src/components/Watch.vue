<!-- Replacing watch option with the composition API -->
<!-- Watch function can only be a getter function/ref/reactive object or an array of properties -->
<template>
  <div>
    <!-- Options API -->
    <input type="text" placeholder="Name" v-model="name" />

    <!-- ref -->
    <input type="text" placeholder="First Name" v-model="firstName" />
    <input type="text" placeholder="Last Name" v-model="lastName" />

    <br>

    <!-- reactive -->
    <input type="text" placeholder="Reactive First Name" v-model="fName" />
    <input type="text" placeholder="Reactive Last Name" v-model="lName" />
    <input type="text" placeholder="Reactive Hero Name" v-model="options.heroName" />
  </div>
</template>

<script>
/* STEPS to apply watch in compostion API */
/* First we have to import watch from vue & then within the setup() function we call the watch function */
/* Import the watch funtion from vue & then watch the data source and then execute the function */

import { ref, reactive, toRefs, watch } from 'vue'
import _ from 'lodash'

export default {
  name: 'Watch',
  setup() {
    const firstName = ref('')
    const lastName = ref('')

    const state = reactive({
      fName: '',
      lName: '',
      options: {
        heroName: '',
      },
    })

    /* watch() accepts two argument */
    /* First args is the data source to watch which is firstName & lastName */
    /* Second args is the funtion that recives newValue & oldValue as args & runs everytime the when ever the value changes for first agrs */
    /* Now we have replaced the watch option API with the compostion API  */
    /* Watch function accepts array of data source so as to keep track of multiple data sources */
    /* Watcher can keep track of mutiple sources at same time using the array  */
    /* If we want the watcher to run at intial value as well as in subsequent values then need the specify third args to watch funtion.*/
    /* Argument is an object and specify immediate as true  */
    watch(
      [firstName, lastName],
      function (newValues, oldValues) {
        console.log('FirstName Old value ', oldValues[0]) /* 0 - firstName and 1 - lastName in the watcher array */
        console.log('FirstName New value ', newValues[0])

        console.log('LastName Old value ', oldValues[1])
        console.log('LastName New value ', newValues[1])
      },
      {
        immediate: true,
      }
    )

    /* Instead of specifying the reactive object(state) as the data source we specify a copy of just the values of the object  */
    /* So here the first argument becomes the getter function */
    /* NOTE - When we pass in a reactive object as the data source the old & new value will be same. That is the intended behaviour */
    watch(
      () => {
        return { ...state } /* Here we have spread the state */
      },
      (newValue, oldValue) => {
        console.log('fname Old value ', oldValue.fName)
        console.log('fname New value ', newValue.fName)

        console.log('lName Old value ', oldValue.lName)
        console.log('lName New value ', newValue.lName)
      }
    )

    /* Here we are only watching the fName. Watching indivisual property in reactive object */
    /* For watching indivisual property in reactive object we need to use getter function  */
    watch(
      () => state.fName,
      (newValue, oldValue) => {
        console.log('fname Old value ', oldValue)
        console.log('fname New value ', newValue)
      }
    )

    /* If we need to check for changes of properties in a nested object like option in reactive we need to set the deep option to true for the watcher */
    /* As oldValue is same as newValue, so to fix this we need to make a deep copy of the options API */
    /* Here we have used clone deep function from lodash & pass in the options object */
    watch(
      () => _.cloneDeep(state.options),
      (newValue, oldValue) => {
        console.log('fname Old value ', oldValue.heroName)
        console.log('fname New value ', newValue.heroName)
      },
      {
        deep: true,
      }
    )

    return {
      firstName,
      lastName,
      ...toRefs(state),
    }
  },
  data() {
    return {
      name: '',
    }
  },
  /* watch keeps track of the name property & run a function every time its value changes  */
  /* the function recives the newValue & oldValue of the property & then we simply log it in console */
  watch: {
    name(newValue, oldValue) {
      console.log('Old value ', oldValue)
      console.log('New value ', newValue)
    },
  },
}
</script>

<style scoped>
</style>