<template>
    <div class="div-cat">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 card div-filt-cat">
                    <h4>FILTER BY COLOR</h4>

                    <div class="div-span mt-5">
                        <span class="div-col-span">
                            <span class="span-col black"></span>
                        </span>
                        <span class="col-name">Black</span>
                    </div>
                    <span class="sp-hr"></span>
                    <div class="div-span">
                        <span class="div-col-span">
                            <span class="span-col blue"></span>
                        </span>
                        <span class="col-name">Blue</span>
                    </div>
                    <span class="sp-hr"></span>
                    <div class="div-span">
                        <span class="div-col-span">
                            <span class="span-col grey"></span>
                        </span>
                        <span class="col-name">Grey</span>
                    </div>
                    <span class="sp-hr"></span>
                    <div class="div-span">
                        <span class="div-col-span">
                            <span class="span-col red"></span>
                        </span>
                        <span class="col-name">Red</span>
                    </div>
                    <span class="sp-hr"></span>
                </div>
                <div class="col-lg-8 card">
                    <div class="row">
                        <div
                            class="col-lg-6 card div-hover mt-5"
                            v-for="(item, index) in filteredData"
                            :key="index"
                        >
                            <div class="div-im-sh">
                                <img :src="item.picture" alt="" />
                            </div>
                            <div class="div-item">
                                <h1 class="title-item">{{ item.title }}</h1>
                                <span>
                                    {{ item.details }}
                                </span>
                                <span class="span-hr"> </span>
                                <div>
                                    <p>
                                        Price :
                                        <span class="span-price">
                                            {{ item.price }}
                                        </span>
                                    </p>
                                    <button class="btn-reserve"><router-link class="nav-link" to="/reserve"
                                >Réserver !</router-link
                            ></button>
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
]);

const filteredData = ref(data.value);
</script>
<style scoped>
.div-cat {
    margin-top: 80px;
}
.card {
    border: none;
}
.div-item {
    /* background-color: aqua; */
    padding: 10px 0;
}
img {
    width: 100%;
    max-width: 100%;
    height: auto;
    object-fit: cover;
    aspect-ratio: 1 / 1;
    height: 100%;
}
.div-hover {
    transition: transform 0.7s cubic-bezier(0.2, 1, 0.2, 1);
    transform: translateY(0);
}
.div-hover:hover {
    transform: translateY(-10px);
}
.cont-it {
    margin-top: 60px;
}
.span-hr {
    width: 60%;
    height: 1px;
    background-color: #c9c9c9;
    display: block;
    margin: 10px 0;
}
.span-price {
    font-size: 25px;
    color: #bd162d;
    font-weight: 600;
}
.div-im-sh {
    height: 270px;
}
.div-span {
    display: flex;
}
.div-col-span {
    padding: 2px;
    border: 1px solid rgba(51, 51, 51, 0.262);
    display: block;
    border-radius: 5px;
}
.red {
    background-color: #e5002a;
}
.black {
    background-color: #000000;
}
.grey {
    background-color: #c9c9c9;
}
.blue {
    background-color: #1b5fc4;
}
.span-col {
    width: 50px;
    height: 50px;
    display: block;
    border-radius: 5px;
}
.col-name {
    display: flex;
    align-content: center;
    flex-wrap: wrap;
    margin-left: 20px;
    font-size: 18px;
    color: #524f4f;
}
.sp-hr {
    width: 80%;
    height: 1px;
    display: block;
    background-color: #c9c9c9;
    margin: 10px 0;
}
.btn-reserve{
    width: 50%;
    height: 40px;
    border: none;
    background-color: #081c3b;
    color: #fff;
    font-weight: 700;
}
</style>
