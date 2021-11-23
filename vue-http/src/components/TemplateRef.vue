<!-- We want to achieve as soon as the page loads up our input field should be focused -->
<!-- We can achieve that by using two methods TEMPLATE REFS & Component Lifecycle Method -->
<!-- In input field we have added a special attribute called ref -->
<!-- template ref is an attribute in vue which is been used to register a reference to an html element or a child component inside a parent component -->
<!-- Here we have assign a label to the attribute called inputRef -->
<!-- Now we have to call the focus method on the input element & the place we do that is in the mounted lifecycle hooks -->
<!-- We can also use refs on a custom component -->
<template>
  <div>
    <input type="text" ref="inputRef" />
    <PostList ref="postListRef" />
  </div>
</template>

<!-- Down here we have used the mounted method which is the place to access the dom -->
<script>
import PostList from './PostList.vue'
export default {
  name: 'TemplateRef',
  components: {
    PostList,
  },
  mounted() {
    console.log(this.$refs.postListRef)
    this.$refs.inputRef.focus() /* Here we have called the focus() method on our inputRef */
  },
}
</script>

<style scoped>
</style>