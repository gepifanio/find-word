<template>
  <p data-test="results-count">{{ count }} results</p>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      default: 0
    }
  }
};
</script>
