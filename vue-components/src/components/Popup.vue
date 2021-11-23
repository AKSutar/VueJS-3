<template>
  <div>
    <h2>This is a popup</h2>
    <input type="text" v-model="name" />
    <!-- Basically on the click of close popup button we are emmiting a custom event called close to the parent component -->
    <!-- And on the parent component we need to listen to the close event & in braces we provide second args called DATA been used to pass to the parent component -->
    <button @click="$emit('close', name)">Close Popup</button>
  </div>
</template>

<script>
export default {
  name: 'Popup',
  data() {
    return {
      name: '',
    }
  },
  /* emits are the array of events that the component can emmit to the parent component */
  /* on click of the button it is going to emmit the close event */
  /* We add validation to the close custom event by turing it to an object instead of using it as array. Inside object braces contain key:value pair */
  /* Key is the custom event name(close) & value is the validation function */
  /* Validation function recives an args specified while emmiting the event. Inside the function body we add the validation rule */
  emits: {
    close: (name) => {
      if (!name) {
        console.warn('Invalid submit event payload!')
        return false
      } else {
        return true
      }
    },
  },
}
</script>

<style scoped>
</style>