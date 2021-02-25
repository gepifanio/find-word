<template>
  <div class="bg-white shadow-xl rounded-lg w-1/2">
    <ul class="divide-y divide-gray-300" v-for="item in data" :key="item">
      <li class="p-4 hover:bg-gray-50">{{ item }}</li>
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
