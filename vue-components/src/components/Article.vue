
<!-- Here we are focusing on props & specifying props types for this article component. -->
<template>
  <div>
    <h1><i>Props Type & Validation</i></h1>
    <br>
    <h2 v-bind="$attrs">{{ title }}</h2>
    <h2>Likes - {{ likes }}</h2>
    <h2>Published - {{ isPublished ? 'Yes' : 'No' }}</h2>
  </div>
</template>

<script>
// Here we have used the props type as an object instead of using the array.
// title/likes/isPublished are the props that are been used for this component.
// Inside the props all are been mentioned in form of key:value pairs.
// Here title & isPublished are the required prop for the article component.
// In the title prop it has a default value been assigned.

export default {
  name: 'Article',
  props: {
    title: {
      type: String,
      required: true,
      default: 'Article Component',
    },
    likes: Number,
    isPublished: {
      type: Boolean,
      required: true,
    },
  },
  inheritAttrs: false,  /* This will prevent the non-prop attributes from being applied to the root element */
}
</script>

<style scoped>
</style>