<template>
   <Header/>
    <main>
        <router-view />
    </main>
   <Footer/>
</template>
<script setup>
import Header from './display/Header.vue'
import Footer from './display/Footer.vue'
</script>
<style scoped>
</style>
