<template>
    <div>
        <Header/>
        <div class="container">
            <div v-for="(item, index) in items" :key="index" class="row mt-5">
                <div class="col-lg-6 card div-col">
                    <h1>{{ item.title }}</h1>
                    <span class="span-a"
                        ><a href="#">{{ item.link }}</a></span
                    >
                    <h4>{{ item.header }}</h4>
                    <p>{{ item.param }}</p>
                    <button>{{ item.buttonText }}</button>
                </div>
                <div class="col-lg-6 card div-img">
                    <img :src="item.imgSrc" alt="" srcset="" />
                </div>
                <span class="span-hr"></span>
            </div>
        </div>
    </div>
</template>
<script setup>
import Header from './Notice/headerNotice.vue'
const items = [
    {
        title: "2022 lexus LC500 sports",
        link: "Financing: 0.9% for 60 months",
        header: `Term (Months): 24 | Deposit: $4,500 | Total Amount:
                        $28,950`,
        param: `Incididunt labore dolore magna aliqua enim veniam quis
                        nostrud mini exercitation ullamco laboris nisiut aliquip
                        dolor.`,
        buttonText: "apply for a loan",
        imgSrc: "https://avada.website/car-dealership/wp-content/uploads/sites/165/2022/03/lexus-car-offer.jpg",
    },
    {
        title: "Certified technicians",
        link: "Includes Engine, Transmission, Body & Rental Assistance",
        header: `Your trusted source for car maintenance and repairs`,
        param: `Incididunt labore dolore magna aliqua enim veniam quis
                        nostrud mini exercitation ullamco laboris nisiut aliquip
                        dolor.`,
        buttonText: "schedule online",
        imgSrc: "https://avada.website/car-dealership/wp-content/uploads/sites/165/2022/03/car-workshop-offer.jpg",
    },
];
</script>
<style scoped>
a {
    padding: 12px 20px;
    background-color: #2263c31a;
    color: #222222;
    font-size: 14px;
    text-decoration: none;
}
h1 {
    margin: 0px;
    font-size: 30px;
    color: #222222;
}
.span-a {
    margin: 35px 0;
}
h4 {
    color: #222222;
    font-size: 18px;
}
p {
    color: #222222;
    margin: 20px 0;
    font-size: 18px;
}
button {
    background-color: #bd162d;
    margin: 20px 0px 0px;
    padding: 18px 35px;
    color: #fff;
    font-size: 18px;
    border: none;
    max-width: 220px;
}
image {
    width: 100%;
}
.span-img {
    width: 100%;
}
.div-col {
    display: flex;
    justify-content: center;
}
.card {
    border: none;
    /* padding: 0; */
}
.span-hr {
    width: 100%;
    height: 1px;
    background-color: #c9c9c9;
    display: block;
    margin: 40px 0;
}
@media (max-width: 991px) {
    .div-img {
        margin-top: 35px;
    }
}
</style>
