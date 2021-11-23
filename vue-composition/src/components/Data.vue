<template>
  <h2>Options - {{ o_firstName }} {{ o_lastName }} a.k.a {{ o_heroName }}</h2>
  <h2>Composition - {{ c_firstName }} {{ c_lastName }} {{ c_heroName }}</h2>
  <h2>Composition - {{ greet }}</h2>
  <h2>Composition - {{ greetHero }}</h2>
  <h3>Self Composition - {{ c_Name }}</h3>
  <h3>Self Composition - {{ selfGreet }}</h3>
  <h2>
    Composition - {{ state.firstName }} {{ state.lastName }}
    {{ state.heroName }}
  </h2>
  <h2>Composition - {{ reactiveGreetHero }}</h2>
</template> 

<script>
/* Here we have used a new method called setup(). This will be the entry point for compositions API */
/* To create the equivalent of firstname data property we use the ref function from vue. And this is different from the Template ref */
/* The ref function returs a reactive reference to a value. Ref function accepts an initial value called 'Clark' */
/* setup() method is the composition api that can be used to replace the data property method */
/* add setup() method to the component & within the setup() method use ref function to create reactive reference for a value */
/* Then put the reactive refernce to the constant & add it as key value pair inside the return and then we access it in template */
/* ref is a function which return a reactive & mutable object that serve as reactive reference to internal value it is holding */
/* Altough ref works great but repetation occours for every property we are creating we need to invoke the ref function */
/* And when accessing the value or assigning a new value we need to mention dot value every single time. This is where reactive comes into play */


import { ref, reactive } from 'vue'

export default {
  name: 'Data',
  setup() {
    const c_firstName = ref('Clark') /* To expose this value in the template we need to return an object from the setup method & specify the properties need to be exposed */
    const c_lastName = ref('Kent')
    const c_heroName = ref('Superman')
    const c_Name = ref('Sonu') 
    c_Name.value = 'Sutar' /* Here we have again assign a value to the above c_Name value property */

    /* Unlike ref function, reactive accepts an object as it's argument & within the object we can define different properties */
    /* There is sort of convention that reactive is been stored in state constant */
    /* Here we are able to eliminate the use of ref & .value multiple no of times */
    /* This is how we can the reactive function instead of data option in a component */
    /* Even the data() option internally uses reactive function */
    const state = reactive({
      firstName: 'Princess',
      lastName: 'Diana',
      heroName: 'Wonder Woman',
    })

    /* And within the setup() method we can read c_firstName value by using dot value property */
    const greet = `Hello ${c_firstName.value}`
    const selfGreet = `Bye ${c_Name.value}`
    const greetHero = `Hello ${c_firstName.value} ${c_lastName.value} a.k.a ${c_heroName.value}`
    const reactiveGreetHero = `Hello ${state.firstName} ${state.lastName} a.k.a ${state.heroName}`

    return {
      c_firstName,
      c_lastName,
      c_heroName,
      c_Name,
      greet,
      greetHero,
      state,
      reactiveGreetHero,
      selfGreet
    }
  },
  data() {
    return {
      o_firstName: 'Bruce',
      o_lastName: 'Wayne',
      o_heroName: 'Batman',
    }
  },
}
</script>

<style scoped>
</style>