/* Mixins allow us to share & reuse the same functionality across all the components where ever required */
/* Mixins are written inside a JS file not in a vue file  */
/* From this file we export the reuseable functionality */
/* Steps to use mixins: */

export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    incrementCount() {
      this.count += 1
    }
  }
}
