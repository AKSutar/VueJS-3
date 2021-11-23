<!-- And here component F is been nested within component E -->
<template>
  <h2>Component E</h2>
  <ComponentF />
</template>

<script>
import ComponentF from './ComponentF'
export default {
  name: 'ComponentE',
  components: {
    ComponentF,
  },
}
</script>

<style scoped>
</style>