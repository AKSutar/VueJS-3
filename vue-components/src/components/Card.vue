
<!-- In this our card contain a header, content and footer -->
<!-- When we use multiple slots then we must specify a name to each of the slots been used -->
<!-- For the content slot we can specify a name if we wish too else we are allow to leave one unnamed slot which is treated as the deafult slot  -->
<template>
  <div class="card">
    <div id="card-header">
      <slot name="header"></slot>
    </div>
    <div id="card-content">
      <!-- This will be considered as the default slot -->
      <slot>Default Content</slot>
    </div>
    <div id="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
}
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 16px;
  margin-bottom: 20px;
  width: 200px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>