<template>
  <div>
    <h2 @mouseover="incrementCount">Hovered {{ count }} times</h2>
  </div>
</template>

<!-- Here we are importing the mixins & we can name the mixins anything of our choice -->
<!-- We mixin the counter functionality using the mixins options. It is an array that can accept more than one mixins -->
<!-- Here we are reusing the same functionality instead of duplicating it -->
<script>
import CounterMixin from '../mixins/counter'
export default {
  name: 'HoverCounter',
  mixins: [CounterMixin],
}
</script>

<style scoped>
</style>