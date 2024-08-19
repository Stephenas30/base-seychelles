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
                <div class="col-lg-6 mar-tp-loc">
                    <h2 class="head2">{{ head }}</h2>
                    <div class="divis-h">
                        <div class="div-sp">
                            <div class="div-loc">
                                <div
                                    v-for="(item, index) in items"
                                    :key="index"
                                    class="div-sp"
                                >
                                    <span class="span-h"></span>
                                    <p>{{ item.text }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 mar-tp-loc">
                    <div class="division-loc-img">
                        <img
                            src="../../../../public/image/photos.png"
                            alt=""
                            srcset=""
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";
const items = [
    { text: "Victoria" },
    { text: "Beau Vallon" },
    { text: "Anse Boileau" },
    { text: "Takamaka" },
    { text: "Cascade" },
    { text: "Anse Royale" },
    { text: "Grand'Anse" },
    { text: "Baie Sainte Anne" },
    { text: "La Passe" },
    { text: "Anse Volbert" },
    { text: "Port Glaud" },
    { text: "Bel Ombre" },
    { text: "Mont Fleuri" },
    { text: "Glacis" },
    { text: "Au Cap" },
    { text: "Anse Aux Pins" },
    { text: "Bel Air" },
];

const text = ref("Latest Inventory");
const param = ref(`Incididunt labore dolore magna aliqua enim veniam quis
                        nostrud tempor tempor adispecing miny exercitation
                        ullamco laboris nisiut.`);
const head = ref(`450+ Dealer Locations Across Seychelles. Locate Your Nearest Dealer.`);
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
.division-loc-img {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
}
.division-loc-img img {
    width: 50%;
}
.div-loc {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
.head2 {
    font-size: 26px;
}
.divis-h {
    margin-top: 20px;
}
.mar-tp-loc {
    margin-top: 80px;
}
.div-sp {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    min-width: 160px;
}
.span-h {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: block;
    margin-top: 2px;
    border: 3px solid #bd162d;
}
</style>
