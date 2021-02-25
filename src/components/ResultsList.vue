<template>
  <div>
    <ul v-for="item in data" :key="item">
      <li>{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => ['']
    }
  }
};
</script>

<style scoped></style>
