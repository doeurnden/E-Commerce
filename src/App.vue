<template>
  <div>
    <Login @cancel="isLogin = false" v-if="isLogin"/>
    <Index v-else @Login="isLogin = true"/>
  </div>
</template>

<script>
  import { RouterLink, RouterView } from 'vue-router'
  import Index from "./views/Index.vue";
  import Login from "./views/Login.vue";
  export default {
  data() {
    return {
      isLogin: false,
    };
  },
  components: {
    Index,
    Login,
  },
};
</script>

<style scoped>
  
</style>
