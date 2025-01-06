<template>
    <div class="head">
        <div class="container divcont">
            <div class="row">
                <div class="col-md-4 mt-3">
                    <h2 class="title-header">Contact en Allemagne</h2>
                    <ul>
                        <li class="mt-3">Eva Car Rental</li>
                        <li>Exerzierplatz 3a</li>
                        <li>D-97072 Wuerzburg</li>
                        <li class="mt-4">Fon: +49 931 663984 98</li>
                        <li>Fax: +49 931 663984 99</li>
                    </ul>
                    <p class="mt-5">
                        E-Mail:
                        <span
                            ><a class="addrs" @click="contactBtn"
                                >booking(at)eva-car-rental(dot)com</a
                            ></span
                        >
                    </p>
                </div>
                <div class="col-md-4 mt-3">
                    <h2 class="title-header">L'entreprise est</h2>
                    <ul>
                        <li class="mt-3">Indian Ocean Travel Ltd.</li>
                        <li>Avenue des Perroquets</li>
                        <li>Flic en Flac</li>
                        <li>Republic of Mauritus</li>
                        <li class="mt-4">Directeur: Adeline Bach</li>
                        <li>Numéro d'enregistrement: 069955</li>
                        <li>Numéro de TVA: 20376952</li>
                    </ul>
                </div>
                <div class="col-md-4 mt-3">
                    <h2 class="title-header">Siège social</h2>
                    <ul>
                        <li class="mt-3">Eva Car Rental</li>
                        <li>Royal Road 363</li>
                        <li>D-97072 Wuerzburg</li>
                        <li>Pointe aux Canonniers</li>
                        <li>Republic of Mauritius</li>
                    </ul>
                </div>
            </div>
            <hr />
        </div>
    </div>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const contactBtn = () => {
    router.push("/contact");
};
</script>

<style lang="scss" scoped>
.head {
    // background-color: #5c7694;
}
.divcont {
    padding: 10px 50px;
}
.title-header {
    font-size: 25px;
    color: #2d3e52;
    font-weight: 500;
    padding: 5px 0px;
}
ul {
    /* background-color: burlywood; */
    padding: 0px;
    color: #333;
}
li {
    list-style: none;
}
p {
    /* background-color: gold; */
    color: #333;
}
.addrs {
    color: #333;
    cursor: pointer;
}
.addrs:hover {
    color: #246caf;
    cursor: pointer;
}
</style>
