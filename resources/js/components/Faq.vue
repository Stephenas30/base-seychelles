<template>
    <div>
        <div class="container">
            <h1>FAQ</h1>
        </div>
        <div class="diviser">
           <div class="tes1">
            <div class="row">
                <div class="col-lg-6">texte</div>
                <div class="col-lg-6">image</div>
            </div>
           </div>
           <div class="tes2">text 2</div>
        </div>
    </div>
</template>
<script setup></script>
<style scoped>
.tes2,
.tes1{
    width: 100%;
    height: 50px;
    background-color: aquamarine;
}

.tes2{
    /* background-color: rgb(60, 58, 58); */
    position: absolute;
    top: 0;
}
.diviser{
    position: relative;
}
</style>
