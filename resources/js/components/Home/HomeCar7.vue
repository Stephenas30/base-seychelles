<template>
    <div class="div-mar-tp">
        <div class="text-center">
            <h1 class="head-car">Lorem, ipsum.</h1>
            <p class="param">Lorem ipsum dolor sit amet.</p>
            <span class="span-hr"></span>
        </div>
        <!--  -->
        <div class="container">
            <div class="row">
                <div
                    class="col-lg-6"
                    v-for="(item, index) in features"
                    :key="index"
                >
                    <div class="card-icn">
                        <div class="div-flex">
                            <span class="span-icn"
                                ><i :class="item.icon"></i
                            ></span>
                            <h2 class="head-h2">{{ item.title }}</h2>
                        </div>
                        <div>
                            <p class="param-icn">{{ item.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--  -->
    </div>
</template>
<script setup>
const features = [
    {
        icon: "bi bi-wrench-adjustable",
        title: "Lorem ipsum.",
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, minus cum, sapiente dolorum adipisci qui beatae praesentium velit sit nostrum provident aspernatur dicta cumque molestias veniam assumenda a. Nam, culpa.",
    },
    {
        icon: "bi bi-gift",
        title: "Lorem ipsum.",
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, minus cum, sapiente dolorum adipisci qui beatae praesentium velit sit nostrum provident aspernatur dicta cumque molestias veniam assumenda a. Nam, culpa.",
    },
    {
        icon: "bi bi-send-fill",
        title: "Lorem ipsum.",
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, minus cum, sapiente dolorum adipisci qui beatae praesentium velit sit nostrum provident aspernatur dicta cumque molestias veniam assumenda a. Nam, culpa.",
    },
    {
        icon: "bi bi-bus-front",
        title: "Lorem ipsum.",
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, minus cum, sapiente dolorum adipisci qui beatae praesentium velit sit nostrum provident aspernatur dicta cumque molestias veniam assumenda a. Nam, culpa.",
    },
];
</script>
<style scoped>
.div-mar-tp {
    margin-top: 80px;
}
.head-car {
    color: #716d6e;
    margin: 0px 0px 15px 0px;
    font-size: 46px;
    font-weight: 900;
    line-height: 1.1em;
}
.param {
    color: #716d6e;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.4em;
    margin: 0px 0px 15px 0px;
}
.span-hr {
    width: 200px;
    height: 5px;
    background-color: #ffbf00;
    display: inline-block;
}
.span-icn {
    background: #ffbf00;
    width: 40px;
    height: 40px;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    color: #fff;
    font-size: 1.2rem;
}
.head-h2 {
    margin: 5px 0px 30px 0px;
    padding: 0px 0px 0px 0px;
    color: #716d6e;
    font-size: 30px;
    font-weight: 900;
    line-height: 1.1em;
}
.param-icn {
    color: #716d6e;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.7em;
    text-align: justify;
}
.card-icn {
    background-color: #ededed;
    padding: 30px;
    border-style: solid;
    border-width: 1px 1px 1px 1px;
    border-color: rgba(2, 1, 1, 0);
    border-radius: 0px 0px 0px 0px;
    margin-top: 30px;
}
.div-flex {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    align-content: center;
}
</style>
