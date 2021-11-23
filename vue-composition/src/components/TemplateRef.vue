<template>
  <div>
    <!-- We have placed the ref attributeon an html element in template -->
    <input type="text" ref="inputRef" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
export default {
  name: 'TemplateRef',
  setup() {
    /* inputRef refers to label for the ref attribute in above template */
    const inputRef = ref(null)
    /* Here we are focusing the input element on page load */
    /* When dealing with refs we always have to access the value using dot value */
    onMounted(() => {
      inputRef.value.focus()
    })

    return {
      inputRef,
    }
  },
  //   Here we have the mounted lifecycle hooks where we access the refs using this.$refs and on inputRef  
  //   mounted() {
  //     this.$refs.inputRef.focus()
  //   },
}
</script>

<style scoped>
</style>