<!-- Here we are going to get data from the app component to component F using provide & inject -->
<template>
  <h2>Component F</h2>
  <h3>Component F username - {{ userName }}</h3>
</template>

<script>
/* This is step 2. Here we injected the username property from the App component. It is having an array with the username property provided from App component */
export default {
  name: 'ComponentF',
  inject: ['userName'], 
}
</script>

<style scoped>
</style>