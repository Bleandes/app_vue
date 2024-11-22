<template>
  <div id="q-app">
    <Loading :show="isLoading" />
    <router-view />
  </div>
  </template>

<script>
import { ref, provide } from 'vue';
import Loading from 'components/Loading.vue';

export default {
  components: { Loading },
  setup() {
    const isLoading = ref(false);
    provide('isLoading', isLoading);
    return { isLoading };
  }
};
</script>
<!-- defineOptions({
  name: 'App'
}); -->
