<template>
    <div class="div-car-d">
        <div class="container">
            <h2>Based On 4,500+ Reviews</h2>
        </div>
        <div class="divcar">
            <div class="row">
                <div class="col-lg-4 p-0">
                    <div class="bg-im-car">
                        <div class="div-car">
                            <div class="div-cont-car">
                                <h1>Request A 24 Hour Test Drive</h1>
                                <p>Pick Your Car And Get Instant Drive</p>
                                <span
                                    ><a href="#">
                                        <router-link
                                            class="nav-link"
                                            to="/about"
                                            >Start Driving</router-link
                                        >
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 p-0">
                    <div class="bg-im-car2">
                        <div class="div-car">
                            <div class="div-cont-car">
                                <h1>Car Workshop Services</h1>
                                <p>All Garage Services Under One Roof</p>
                                <span
                                    ><a href="#">
                                        <router-link
                                            class="nav-link"
                                            to="/about"
                                            >Start Driving</router-link
                                        >
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 p-0">
                    <div class="bg-im-car3">
                        <div class="div-car">
                            <div class="div-cont-car">
                                <h1>Get Instant Cash For Trade-Ins</h1>
                                <p>Fair & Instant Cash Offer In Minutes</p>
                                <span
                                    ><a href="#">
                                        <router-link
                                            class="nav-link"
                                            to="/about"
                                            >Start Driving</router-link
                                        >
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup></script>
<style scoped>
.bg-im-car {
    background-image: url(https://avada.website/car-dealership/wp-content/uploads/sites/165/2021/12/car-test-drive-banner.jpg);
}
.bg-im-car2 {
    background-image: url(https://avada.website/car-dealership/wp-content/uploads/sites/165/2021/12/car-service-banner.jpg);
}
.bg-im-car3 {
    background-image: url(https://avada.website/car-dealership/wp-content/uploads/sites/165/2022/02/trade-in-banner.jpg);
}
.div-car {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.393);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 500px;
}
.divcar {
    width: 100%;
    /* background: red; */
}
.div-car-d {
    margin-top: 80px;
}
.row {
    padding: 0;
    margin: 0;
}
h1 {
    /* font-size: 2rem; */
    text-transform: uppercase;
    min-height: 80px;
    /* background-color: red; */
}
h2 {
    /* background-color: red; */
    padding: 15px 0;
}
p {
    margin-top: 15px;
}
.div-cont-car {
    color: #fff;
    max-width: 80%;
    min-height: 50px;
}
span {
    padding: 11px 27px;
    margin-top: 25px;
    display: inline-block;
    color: #fff;
    border: 1px solid #fff;
}
a {
    text-decoration: none;
    color: #fff;
}
</style>
