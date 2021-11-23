<template>
  <div>
    <button @click="incrementCount">Clicked {{ count }} times</button>
  </div>
</template>

<!-- Here we are importing the mixins & we can name the mixins anything of our choice -->
<!-- We mixin the counter functionality using the mixins options. It is an array that can accept more than one mixins -->
<!-- Here we are reusing the same functionality instead of duplicating it -->
<!-- Down here we have the same functionality but one is present in data property & another is present inside the mixin. So here data propety gets the higher priority not the mixins -->
<script>
import CounterMixin from '../mixins/counter'
export default {
  name: 'ClickCounter',
  mixins: [CounterMixin],
  data() {
    return {
      count: 100,
    }
  },
}
</script>

<style scoped>
</style>