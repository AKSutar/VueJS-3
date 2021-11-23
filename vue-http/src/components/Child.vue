<template>
  <div>Child component</div>
</template>

<!-- Inside the script block we have defined eight lifecycle hooks -->
<!-- In each of the methods we have simply logged statements indicating the component & corresponding method name -->
<script>
export default {
  name: 'Child',
  beforeCreate() {
    console.log('Child beforeCreate()')
  },
  created() {
    console.log('Child created()')
  },
  beforeMount() {
    console.log('Child beforeMount()')
  },
  mounted() {
    console.log('Child mounted()')
  },
  beforeUpdate() {
    console.log('Child beforeUpdate()')
  },
  updated() {
    console.log('Child updated()')
  },
  beforeUnmount() {
    console.log('Child beforeUnmount()')
  },
  unmounted() {
    console.log('Child unmounted()')
  },
}
</script>

<style scoped>
</style>