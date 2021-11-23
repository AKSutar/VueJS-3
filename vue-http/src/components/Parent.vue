<template>
  <div>
    Parent component
    <!-- On the click of button this will update the showChild data property -->
    <!-- This will cause the parent to enter the update phase. The showChild value will become false & v-if on Child component evalutes to false -->
    <!-- As result of that the child component will be removed from the DOM & which will cause the child component move to unmounting phase -->
    <button @click="showChild = !showChild">Toggle Child</button>
    <Child v-if="showChild" />
  </div>
</template>

<script>
/* Rendering of the child component is controlled by v-if directive which is equal to showChild data property set to true */
import Child from './Child.vue'
export default {
  components: { Child },
  name: 'Parent',
  data() {
    return {
      showChild: true,
    }
  },
  beforeCreate() {
    console.log('Parent beforeCreate()')
  },
  created() {
    console.log('Parent created()')
  },
  beforeMount() {
    console.log('Parent beforeMount()')
  },
  mounted() {
    console.log('Parent mounted()')
  },
  beforeUpdate() {
    console.log('Parent beforeUpdate()')
  },
  updated() {
    console.log('Parent updated()')
  },
  beforeUnmount() {
    console.log('Parent beforeUnmount()')
  },
  unmounted() {
    console.log('Parent unmounted()')
  },
}
</script>

<style scoped>
</style>