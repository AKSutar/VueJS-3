<template>
  <h1>Computed Properties</h1>
  <h2>Full Name - {{firstName}} {{lastName}}</h2>
  <h2>Computed Full Name - {{fullName}}</h2>
  <!-- Here the initial value of total is 0 -->
  <h2>Total - {{ items.reduce((total, curr) => (total = total + curr.price), 0) }}</h2>
  <!-- Here the computed property automatically updates the total items price. -->
  <!-- For the total computed property the dependencies is the item's array. -->
  <!-- Since the item's array changes on the button click the total is recomputed & new value is shown -->
  <button @click="items.push({ id: 4, title: 'Keyboard', price: 50 })">Add item</button>
  <h2>Computed total - {{total}}</h2>
  <h3>Method total - {{ getTotal() }}</h3>
  <input type="text" v-model="country" />
  <!-- Difference between METHODS & COMPUTED PROPERTY -->
  <!-- In computed property if there is a change in UI which is independent of computed property vue will reuse the already computed value instead of recalculating -->
  <!-- But a method however will always be called when ever there is a change in the UI -->

  <!-- Here we are displaying the items that have a price greater than 100 -->
  <template v-for="item in items" :key="item.id">
    <h2 v-if="item.price > 100">{{ item.title }}  {{ item.price }}</h2>
  </template>

  <!-- As conditional rendering above just works fine, the recommended approach is to use computed properties. -->
  <!-- Here we have used computed properties along with v-for directive -->
  <h1>Computed properties along with v-for directive</h1>
  <h2 v-for="item in expensiveItems" :key="item.id">
    {{ item.title }} - {{ item.price }}
  </h2>

  <button @click="changeFullName">Change fullname</button>
</template>

<script>

export default {
  name: 'App',
  
  data() {
    return {
      firstName: 'Bruce',
      lastName: 'Wayne',
      items: [
        {
          id: 1,
          title: 'TV',
          price: 100,
        },
        {
          id: 2,
          title: 'Phone',
          price: 200,
        },
        {
          id: 3,
          title: 'Laptop',
          price: 300,
        },
      ],
      country: ''
    }
  },
  methods:{
    getTotal() {
      console.log('getTotal Method');
      return this.items.reduce((total, curr) => (total = total + curr.price), 0)
    },
    changeFullName() {
      console.log('changeFullName Method');
      this.fName = 'Clark Kent'
    },
  },

  /* Down we have computed property which have a function inside. Here we have composed a new data property form existing data properties */
  /* fullName() is a property composed from firstName & lastName */
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`
    },
    total() {
      console.log('total computed property')
      return this.items.reduce((total, curr) => (total = total + curr.price), 0)
    },
    expensiveItems() {
      return this.items.filter((item) => item.price > 100)
    },

    /* Here it is an object instead of using the functions. */
    fName: {
      /* get() will be called whenever we want to read the computed property value */
      get() {
        return `${this.firstName} ${this.lastName}`
      },
      /* set() will be in use when ever we want to write/set a new value to the computed property. Here it have value as an argument */
      set(value) {
        const names = value.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
      },
    },
  }
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
