<template>
    <div class="div-header">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 div-cent">
                    <div class="card mt-5">
                        <h2>Lorem, ipsum.</h2>
                        <h6>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Quia, nulla!
                        </h6>
                        <p class="param-right">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Dicta eaque, reprehenderit repellendus dolore
                            dignissimos officia adipisci tempora, asperiores,
                            vero atque quibusdam ipsa iusto qui nemo hic
                            excepturi eveniet earum mollitia.
                        </p>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="card mt-5">
                        <img
                            src="https://demo.xpeedstudio.com/carrental/wp-content/uploads/2020/06/car_image.jpg"
                            alt="image"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup></script>
<style scoped>
.div-header {
    margin-top: 80px;
}
h2 {
    color: #716d6e;
    font-size: 36px;
    font-weight: 900;
    line-height: 1.1em;
}
h6 {
    color: #716d6e;
    font-size: 24px;
    font-weight: 400;
    line-height: 1.4em;
}
.param-right {
    color: #716d6e;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.7em;
    margin: 0px 0px 10px 0px;
    text-align: justify;
    padding-right: 10px;
}
h6,
p {
    margin-top: 10px;
}
.div-cent {
    /* background: red; */
    display: flex;
    flex-wrap: wrap;
    align-content: center;
}
.card {
    border: none !important;
}
</style>
