<template>
  <div>
    <!-- When we click the button the control flows down to the getPosts() methods. There we make get request to the api endpoint  -->
    <!-- Here i template we display each post id,title & body -->
    <button @click="getPosts">Load Posts</button>
    <div v-for="post in posts" :key="post.id">
      <h3>{{ post.id }}. {{ post.title }}</h3>
      <p>{{ post.body }}</p>
      <hr />
    </div>
    <h3 v-if="errorMsg">{{ errorMsg }}</h3>
  </div>
</template>

<script>
import axios from 'axios'

/* Here we have used axios to make a get request to JSONplaceholder api. We have placed it inside the methods */
/* Here inside posts data property which is an empty array we store the list of posts that is been fetched from the URL */
/* We have used a new method called getPosts() which will be called on click of button */
/* To make the get request we invoke the get method on the axios library which is axios.get & this method accepts the api endpoint as argument which is the URL */
/* Axios is a promise based library. So we can add then & catch blocks */
/* Here .then accepts arrow func as args which gives us list of posts that been retrived & .catch will log the error */
/* Once the data is recived we update the posts data property. When we update the data the component get re-render */
/* posts data property that contain many items which we iterate over using v-for directive. */
/* Each single post in posts data array has unique id,title,body & userId */
export default {
  name: 'PostList',
  /* Here we are hooking into creating lifecycle methods. Inside this we have access to all the data properties & methods of this component */
  /* We are calling the getPosts() methods */
  /* All we did move the execution of getPosts() method into the created lifecycle method, so that all data been showed up on page reload only */
  created() {
    this.getPosts()
  },
  data() {
    return {
      posts: [],
      errorMsg: '',
    }
  },
  methods: {
    getPosts() {
      axios
        .get('https://jsonplaceholder.typicode.com/posts') /* Here we are making a HTTP request but how do we access the data return? */
        .then((response) => {
          console.log(response.data)
          this.posts = response.data /* Here we are assigning the list of data array that is been fetched from the URL to the post data property */
        })
        .catch((error) => {
          console.log(error)
          this.errorMsg = 'Error retrieving data'
        })
    },
  },
}
</script>

<style scoped>
</style>