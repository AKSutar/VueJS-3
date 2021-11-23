<!-- Component Styling -->
<!-- By default, a component styles are been applied globally in the component tree. Weather we apply the styles in parent component or child component. -->
<!-- Component styles get applied through out the entire project -->
<!-- By adding scoped attribute in style tag, the styling get applied only to the particular component  -->
<!-- Here the h4 styling only get applied to this particluar component. This does not get applied globally -->
<template>
  <slot></slot>
</template>

<script>
export default {
  name: 'ChildStyles',
}
</script>

<style scoped>
h4 {
  color: olivedrab;
}
</style>