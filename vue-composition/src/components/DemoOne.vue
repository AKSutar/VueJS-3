<template>
  <h2>{{ name }}</h2>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'DemoOne',
  setup() {
    const name = ref('Vishwas')

    /* down func will change the const name to Codevolution exactly after 5 sec */
    /* Using ref we are able to change the above const name to Codevolution after 5 sec. This are not possible using simple const or let */
    /* Vue reacting to changes & this is what happen in reactive function as well. This is called reactivity in vue */
    setTimeout(() => {
      name.value = 'Codevolution'
    }, 5000)
    return {
      name,
    }
  },
}
</script>

<style scoped>
</style>