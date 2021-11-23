
<!-- When ever we want to reuse this Greet component, we can just include the Greet tag where ever necessary. -->
<!-- Here we have exported the Greet.vue component & imported inside the App.vue & then include in the app component template -->
<!-- To include the greet component in our app component we specify the component as custom html tag in template block -->
<template>
  <h2>Hello {{ name }} a.k.a {{ heroName }}</h2>
</template>

<script>
// Here the exported default object contain a property called name which represents the name of the component.
// To retrive the value from the Greet component we have used props.
// It contains all the data properties/custom attributes that component will accept from parent component.
// So App component is the parent component & Greet is the child components.
// We can mention the props name anything of our choice
export default {
  name: 'Greet',
  props: ['name', 'heroName', ],
}
</script>

<style scoped>
</style>