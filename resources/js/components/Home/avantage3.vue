<template>
    <div>
        <div class="container divcont">
            <div class="division-grid">
                <div
                    class="card"
                    v-for="(item, index) in features"
                    :key="index"
                >
                    <div class="stepBox text-center">
                        <h1><i :class="item.icon"></i></h1>
                        <p>{{ item.text }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const features = [
    { icon: "bi bi-shield-check", text: "Assurance tous risques" },
    { icon: "bi bi-truck", text: "Livraison" },
    { icon: "bi bi-geo-alt", text: "GPS gratuit" },
    { icon: "bi bi-speedometer", text: "Kilométrage illimité" },
    { icon: "bi bi-person-plus-fill", text: "Conducteur additionnel" },
    { icon: "bi bi-clock", text: "Annulation" },
];
</script>

<style scoped>
.divcont {
    padding-top: 80px;
}
.row {
    align-items: stretch;
}
.stepBox {
    /* background: #2b2a2a; */
    padding: 18px 12px;
    border-radius: 12px;
    height: 100%;
    border: 1px solid #e3e3e3;
}
p {
    color: #716d6e;
    font-weight: 500;
    font-size: 14px;
}
h1 i {
    font-size: 4rem;
    /* color: #fff; */
    color: #ffbf00;
}
.division-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-auto-flow: row;
    gap: 20px;
}
.card {
    border: none;
}
</style>
