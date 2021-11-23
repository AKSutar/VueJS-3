<template>
  <!-- Watchers are been used to watch any data/computed property & execute some code in response to chnages in the value -->
  <h1>Vue-Watchers</h1>

  <!-- Here we are going to use watchers to display an alert to the user when ever the volume reaches to 16 -->
  <h2>Volume Tracker (0-20)</h2>
  <h3>Current Volume : {{ volume }}</h3>
  <div>
    <button @click="volume += 2">Increase</button>
    <button @click="volume -= 2">Decrease</button>
  </div>

  <input type="text" v-model="movie" />
  <!-- Here it will not log the O/P as watcher will not watch for chenges in deeply nested properties of an object. -->
  <!-- So to monitor the changes of an object on the watcher we provided a deep property & set it to true -->
  <!-- this behaviour holds good while mutating arrays as well. -->
  <input type="text" v-model="movieInfo.title" />
  <input type="text" v-model="movieInfo.actor" />
  <button @click="movieList = movieList.push('Wonder Woman')">
    Add movie push
  </button>
  <div> 
    <!-- Here array.conact returns a new array & does not modify the same existing array. -->
    <button @click="movieList = movieList.concat(['Wonder Woman'])">Add movie concat</button> 
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      volume: 0,
      movie: 'Dark Knight',
      movieInfo: {
        title: '',
        actor: ''
      },
      movieList: ['Batman' , 'Superman']
    }
  },
  methods: {},
  computed: {},
  /* Here we are using the watch property to watch any data/computed property */
  /* Each watch property contain keys which corresponds to data/computed property that we want to watch for a change in value. */
  /* Here we are watching the volume key present inside the data property */
  /* Each key inside the watchers has been assigned a function that will be executed when ever the property value changes */
  /* So here we are able to watch the volume proeprty & execute the code when it reaches a specific value */
  /* Here watchers are in the form of object & that object will conatin the property called handler which is a function only */
  /* Here we have provide immediate property & set it to true in order to run the watcher on page load */
  /* this will basically inform vue that the handler function sholud be run initially on page load. */
  /* Immediate property that run the watcher handler on page load */
  watch: {
    volume: {
      handler(newValue, oldValue) {
        console.log(newValue);
        console.log(oldValue);
        if (newValue > oldValue && newValue === 16) {
          alert(
            'Listening to a high volumne for a long time may damage your hearing'
          )
        }
      },
      immediate: true,
    },
    movie: {
      handler(newValue) {
        console.log(`Calling API with movie name = ${newValue}`)
      },
      immediate: true,
    },
    movieInfo: {
      handler(newValue) {
        console.log(
          `Calling API with movie title = ${newValue.title} and actor = ${newValue.actor}`
        )
      },
      deep: true,
    },
    movieList: {
      handler(newValue) {
        console.log(`Updated list ${newValue}`)
      },
      deep: true,
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
