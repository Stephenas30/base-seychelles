<template>
    <div class="header">
        <HeaderNotice />
        <CgvContact />
        <Cgvdiv />
    </div>
</template>
<script setup>
import HeaderNotice from "./Notice/headerNotice.vue";
import Cgvdiv from "./Notice/Cgvdiv.vue";
import CgvContact from "./Notice/Cgvcontact.vue";
</script>
<style lang="scss" scoped>
.header {
    background-color: #fff;
}
</style>
