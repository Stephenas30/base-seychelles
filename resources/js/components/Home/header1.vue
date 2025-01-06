<template>
    <div>
        <div class="div-header">
            <div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 p-0">
                            <div class="title-head">
                                <h1>{{ $t("welcome") }}</h1>
                                <p>
                                    {{ $t("Please") }}
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-6"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.div-header {
    background-image: url("/public/image/car.jpg") !important;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    /* background-color: red; */
    width: 100%;
    min-height: 500px;
}
.title-head {
    background-color: rgba(11, 11, 11, 0.529);
    min-height: 320px;
    padding: 10px 30px;
    display: flex;
    margin: 25px 0;
    justify-content: flex-start;
    align-content: center;
    flex-wrap: wrap;
    color: #fff;
}

.title-head h1 {
    text-transform: capitalize;
    font-size: 50px;
}
.title-head p {
    font-size: 32px;
}
@media (max-width: 765px) {
    .title-head h1 {
        font-size: 40px;
    }
    .title-head p {
        font-size: 27px;
    }
}
@media (max-width: 375px) {
    .title-head {
        margin: 10px 0;
    }
}
</style>
