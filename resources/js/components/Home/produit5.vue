<template>
    <div class="div-col">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <h1>{{ text }}</h1>
                    <img
                        class="img-anime"
                        src="https://avada.website/car-dealership/wp-content/uploads/sites/165/2021/12/heading-separator.png"
                        alt=""
                    />
                </div>
                <div class="col-lg-6">
                    <p class="param-prod">{{ param }}</p>
                </div>
            </div>
        </div>
        <div>
            <div class="container cont-it">
                <div class="row">
                    <div
                        class="col-lg-4 card div-hover"
                        v-for="(item, index) in filteredData"
                        :key="index"
                    >
                        <div class="div-im-sh">
                            <img
                            class="img"
                                :src="item.picture"
                                alt="images"
                            />
                        </div>
                        <div class="div-item">
                            <h1 class="title-item">{{ item.title }}</h1>
                            <span> {{ item.details }} </span>
                            <span class="span-hr"></span>
                            <div>
                                <p>
                                    Price :
                                    <span class="prom-price">$58,200.00</span>
                                    <span class="span-price"> {{ item.price }} </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";

const text = ref("Latest Inventory");
const param = ref(`Incididunt labore dolore magna aliqua enim veniam quis
                        nostrud tempor tempor adispecing miny exercitation
                        ullamco laboris nisiut.`);
const data = ref([
    {
        title: "Tesla Model 3",
        details: "18,360 mi • Manual • Petrol • Black",
        price: "$42,800.00",
        picture: `https://avada.website/car-dealership/wp-content/uploads/sites/165/2022/02/tesla-1.jpg`,
    },
    {
        title: "Tesla Model 3",
        details: "18,360 mi • Manual • Petrol • Black",
        price: "$42,800.00",
        picture: `https://avada.website/car-dealership/wp-content/uploads/sites/165/2021/12/aston-martin-1.jpg`,
    },
    {
        title: "Tesla Model 3",
        details: "18,360 mi • Manual • Petrol • Black",
        price: "$42,800.00",
        picture: `https://avada.website/car-dealership/wp-content/uploads/sites/165/2022/02/audi-1.jpg`,
    },
    {
        title: "Tesla Model 3",
        details: "18,360 mi • Manual • Petrol • Black",
        price: "$42,800.00",
        picture: `https://avada.website/car-dealership/wp-content/uploads/sites/165/2021/12/mercedes-car-dealer.jpg`,
    },
    {
        title: "Tesla Model 3",
        details: "18,360 mi • Manual • Petrol • Black",
        price: "$42,800.00",
        picture: `https://avada.website/car-dealership/wp-content/uploads/sites/165/2021/12/citroen-car-dealer.jpg`,
    },
    {
        title: "Tesla Model 3",
        details: "18,360 mi • Manual • Petrol • Black",
        price: "$42,800.00",
        picture: `https://avada.website/car-dealership/wp-content/uploads/sites/165/2021/12/seat-car-dealer.jpg`,
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
.title-item {
    font-size: 25px;
    font-weight: bolder;
}
.card {
    border: none;
}
.div-im-sh {
    height: 270px;
}
.div-item {
    /* background-color: aqua; */
    padding: 10px 0;
}
.cont-it {
    margin-top: 60px;
}
.span-hr {
    width: 60%;
    height: 1px;
    background-color: rgba(157, 152, 152, 0.725);
    display: block;
    margin: 10px 0;
}
.span-price {
    font-size: 25px;
    color: #bd162d;
    font-weight: 600;
}
.div-hover {
    transition: transform 0.7s cubic-bezier(0.2, 1, 0.2, 1);
    transform: translateY(0);
}
.div-hover:hover {
    transform: translateY(-10px);
}
.prom-price{
    text-decoration: line-through;
    color: #6c757d;
    padding: 0 8px;
}
.img {
    width: 100%;
    max-width: 100%;
    height: auto;
    object-fit: cover;
    aspect-ratio: 1 / 1;
    height: 100%;
}
</style>
