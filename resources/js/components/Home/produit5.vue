<template>
    <div class="div-col">
        <div class="container">
            <div class="text-center">
                <h1 class="head-car">Lorem, ipsum.</h1>
                <p class="param">Lorem ipsum dolor sit amet.</p>
                <span class="span-hr"></span>
            </div>
        </div>
        <div>
            <div class="container">
                <div class="row">
                    <div
                        class="col-lg-4 card div-hover"
                        v-for="(item, index) in filteredData"
                        :key="index"
                    >
                        <div class="div-bord-auto">
                            <div class="div-im-sh">
                                <img
                                    class="img"
                                    :src="item.picture"
                                    alt="images"
                                />
                            </div>
                            <div class="div-item">
                                <h1 class="title-item">{{ item.title }}</h1>
                                <span class="span-dtl">
                                    {{ item.details }}
                                </span>
                                <span class="span-hr-auto"></span>
                                <div>
                                    <p>
                                        Price <span>5 days</span> :
                                        <span class="prom-price">€220.00</span>
                                        <span class="span-price">
                                            {{ item.price }}
                                        </span>
                                    </p>
                                </div>
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

const data = ref([
    {
        title: "Suzuki Alto",
        details: "35 kW, 800 ccm • Manual",
        price: "€143.50",
        picture: `https://d12ittivwictyd.cloudfront.net/images/cars/suzuki-alto.png`,
    },
    {
        title: "Suzuki Alto K10",
        details: "48 kW, 1200 ccm • Automatic",
        price: "€143.50",
        picture: `https://d12ittivwictyd.cloudfront.net/images/cars/suzuki-alto-k10.png`,
    },
    {
        title: "Kia Picanto",
        details: "51 kW, 998 ccm • Automatic",
        price: "€172.35",
        picture: `https://d12ittivwictyd.cloudfront.net/images/cars/kia-picanto.png`,
    },
    {
        title: "Suzuki Spresso",
        details: "49 kW, 1000 ccm • Manual",
        price: "€172.35",
        picture: `https://d12ittivwictyd.cloudfront.net/images/cars/suzuki-spresso.png`,
    },
    {
        title: "Mitsubishi Mirage",
        details: "59 kW, 1100 ccm • Automatic",
        price: "€172.35",
        picture: `https://d12ittivwictyd.cloudfront.net/images/cars/mitsubishi-mirage-2014.png`,
    },
    {
        title: "Renault Kwid Climber",
        details: "49 kW, 999 ccm • Automatic",
        price: "€172.35",
        picture: `https://d12ittivwictyd.cloudfront.net/images/cars/renault-kwid-climber.png`,
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
    margin-top: 50px;
}
.div-bord-auto {
    padding: 25px;
    border: 1px solid #d5d5d5;
    text-align: center;
}
.div-im-sh {
    /* height: 270px; */
}
.div-item {
    /* background-color: aqua; */
    padding: 10px 0;
}
.span-hr-auto {
    width: 80%;
    height: 1px;
    background-color: #716d6e;
    display: inline-block;
    margin: 10px 0;
}
.span-price {
    font-size: 25px;
    color: #ffbf00;
    font-weight: 600;
}
.div-hover {
    transition: transform 0.7s cubic-bezier(0.2, 1, 0.2, 1);
    transform: translateY(0);
}
.div-hover:hover {
    transform: translateY(-10px);
}
.prom-price {
    text-decoration: line-through;
    color: #6c757d;
    padding: 0 8px;
}
.img {
    /* width: 100%;
    max-width: 100%;
    height: auto;
    object-fit: cover;
    aspect-ratio: 1 / 1;
    height: 100%; */
}
.head-car {
    color: #716d6e;
    margin: 0px 0px 15px 0px;
    font-size: 46px;
    font-weight: 900;
    line-height: 1.1em;
}
.span-hr {
    width: 200px;
    height: 5px;
    background-color: #ffbf00;
    display: inline-block;
}
.param {
    color: #716d6e;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.4em;
    text-align: center;
    margin: 0px 0px 15px 0px;
}
h1,
p,
span {
    color: #716d6e;
}
.span-dtl {
    text-transform: uppercase;
}
</style>
