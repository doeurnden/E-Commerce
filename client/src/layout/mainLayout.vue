<template>
<Navbar/>
<slot/>
<Foot/>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import Foot from '../components/Footer.vue'
</script>

<style lang="scss" scoped>

</style>