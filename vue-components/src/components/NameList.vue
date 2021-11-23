
<!-- Here we bind the unique value to the key attributes which is firstName as all are different inside the names array -->
<!-- Well we needed a way to send name as data to the parent component. In vue will use slots props to achieve that -->
<!-- On the slot we gonna add two props to send the firstName & lastName to the parent component  -->
<!-- To attach the firstName & lastName using v-bind directive shorthand. This are called slot props  -->
<!-- To the slot props we assign name.firstName & name.lastName -->
<template>
  <h3 v-for="name in names" :key="name.firstName">
    <!-- Here name represents the current object in each iteration. This is sending data to the parent -->
    <slot :firstName="name.firstName" :lastName="name.lastName"></slot>
  </h3>
</template>

<script>
export default {
  name: 'NameList',
  data() {
    return {
      names: [
        {
          firstName: 'Bruce',
          lastName: 'Wayne',
        },
        {
          firstName: 'Clark',
          lastName: 'Kent',
        },
        {
          firstName: 'Princess',
          lastName: 'Diana',
        },
      ],
    }
  },
}
</script>

<style scoped>
</style>