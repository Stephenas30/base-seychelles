<template>
   <Header/>
    <main>
        <router-view />
    </main>
   <Footer/>
</template>
<script setup>
import Header from './app/Header.vue'
import Footer from './app/Footer.vue'
</script>
<style scoped>
</style>
