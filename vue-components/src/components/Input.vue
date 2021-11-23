<template>
  <!-- Here we bind the value attribute to the input element. We bind that using v-bind -->
  <input
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  name: 'Input',
  props: {
    modelValue: String, /* As we are using v-model on a custom component so we need to specify it */
  },
  emits: ['update:modelValue'],
}
</script>

<style scoped>
input[type='text'] {
  display: block;
  width: 400px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.4;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>