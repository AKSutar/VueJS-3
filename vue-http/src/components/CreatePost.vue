<template>
  <div>
    <!-- Here we have three input fields mapped to three data properties using v-model directive -->
    <!-- We add the prevent modifier on the submit event to ensure the page don't get refresh on click of Create post button -->
    <!-- Even here are tieing up the values to the data properties that we are going to send post request -->
    <!-- When the form get submitted createPost() method get called  -->
    <form @submit.prevent="createPost">
      <div>
        <label for="userId">Post User ID</label>
        <input type="text" id="userId" v-model="formData.userId" />
      </div>
      <div>
        <label for="title">Post Title</label>
        <input type="text" id="title" v-model="formData.title" />
      </div>
      <div>
        <label for="body">Post Body</label>
        <input type="text" id="body" v-model="formData.body" />
      </div>
      <!-- When the button is clicked a submit event is emmited on the form -->
      <button>Create Post</button>
    </form>
  </div>
</template>

<!-- Inside the formData() we have three data property that will be used for three fields that need to be send to api endpoint. All been initialied to empty string -->
<script>
import axios from 'axios'
export default {
  name: 'CreatePost',
  data() {
    return {
      formData: {
        userId: '',
        title: '',
        body: '',
      },
    }
  },
  methods: {
    createPost() {
      axios
        .post('https://jsonplaceholder.typicode.com/posts', this.formData) /* Here we are making a post request to the URL server provided. It accept second args which is the data that has to be sent. As here we are sending formData() */
        .then((response) => {
          console.log(response) /* When the post request is completed, we get response and error. Simply log the error */
        })
        .catch((error) => {
          console.log(error) /* Simply log the error */
        })
    },
  },
}
</script>

<style scoped>
</style>