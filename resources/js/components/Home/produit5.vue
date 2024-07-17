<template>
    <div class="div-col">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <h1>Latest Inventory</h1>
                    <img
                        class="img-anime"
                        src="https://avada.website/car-dealership/wp-content/uploads/sites/165/2021/12/heading-separator.png"
                        alt=""
                    />
                </div>
                <div class="col-lg-6">
                    <p class="param-prod">
                        Incididunt labore dolore magna aliqua enim veniam quis nostrud tempor tempor adispecing miny exercitation ullamco laboris nisiut.
                    </p>
                </div>
            </div>
        </div>
        <div>
            <div class="container cont-it">
                <div class="row">
                    <div
                        class="col-lg-4 card"
                        v-for="(item, index) in filteredData"
                        :key="index"
                    >
                    <img src="https://avada.website/car-dealership/wp-content/uploads/sites/165/2022/02/tesla-1.jpg" alt="">
                    <div class="div-item">
                        <h1 class="title-item">{{ item.title }}</h1>
                        <span>18,360 mi • Manual • Petrol • Black</span>
                        <span class="span-hr"></span>
                        <div>
                            <p>Price : <span class="span-price">$42,800.00</span></p>
                        </div>
                    </div>
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const data = ref([
    {
        title: "Tesla Model 3"
    },
    {
        title: "Tesla Model 3"
    },
    {
        title: "Tesla Model 3"
    },
    {
        title: "Tesla Model 3"
    },
    {
        title: "Tesla Model 3"
    },
    {
        title: "Tesla Model 3"
    },
]);

const filteredData = ref(data.value); 

</script>
<style scoped>
.div-col {
    margin-top: 80px;
}
.param-prod {
    font-size: 20px;
    text-align: justify;
}
.img-anime {
    width: 20%;
}
.title-item{
    font-size: 25px;
    font-weight: bolder;
}
.card{
    border: none;
}
.div-item{
    /* background-color: aqua; */
    padding: 10px 0;
}
.cont-it{
    margin-top: 60px;
}
.span-hr{
    width: 55%;
    height: 2px;
    background-color: #bd162d;
    display: block;
    margin: 10px 0;
}
.span-price{
    font-size: 25px;
    color: #bd162d;
}
</style>
