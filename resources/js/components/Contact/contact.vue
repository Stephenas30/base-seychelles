<template>
    <div>
        <div class="container mt-5">
            <div class="row">
                <div class="col-lg-4">
                    <h2>Dealership Info</h2>
                    <img
                        src="https://avada.website/car-dealership/wp-content/uploads/sites/165/2021/12/heading-separator.png"
                        alt=""
                        srcset=""
                    />
                    <div class="div-span mt-5">
                        <span class="div-col-span">
                            <span class="span-col"
                                ><i class="bi bi-telephone-fill"></i
                            ></span>
                        </span>
                        <div class="div-nm-cnt">
                            <h4>(202) 1155-909</h4>
                            <span class="col-name"
                                >Call our dealer assistants, anytime!</span
                            >
                        </div>
                    </div>
                    <span class="sp-hr"></span>
                    <div class="div-span mt-5">
                        <span class="div-col-span">
                            <span class="span-col"
                                ><i class="bi bi-envelope-fill"></i
                            ></span>
                        </span>
                        <div class="div-nm-cnt">
                            <h4>cars@eva-rental.com</h4>
                            <span class="col-name"
                                >Have any queries? Send us an email</span
                            >
                        </div>
                    </div>
                    <span class="sp-hr"></span>
                    <div class="div-span mt-5">
                        <span class="div-col-span">
                            <span class="span-col"
                                ><i class="bi bi-house-door-fill"></i
                            ></span>
                        </span>
                        <div class="div-nm-cnt">
                            <h4>32 Stimple Road</h4>
                            <span class="col-name"
                                >Grand Pierce, Florida – 34567, USA</span
                            >
                        </div>
                    </div>
                    <span class="sp-hr"></span>
                    <div class="div-span mt-5">
                        <span class="div-col-span">
                            <span class="span-col"
                                ><i class="bi bi-clock"></i
                            ></span>
                        </span>
                        <div class="div-nm-cnt">
                            <h4>Showroom Hours</h4>
                            <span class="col-name"
                                >Monday – Friday : 8 am to 9 pm</span
                            >
                            <span class="col-name"
                                >Saturday : 9 am to 8 pm</span
                            >
                            <span class="col-name">Sunday : 10 am to 6 pm</span>
                        </div>
                    </div>
                    <span class="sp-hr"></span>
                </div>
                <div class="col-lg-8 div-form">
                    <h2>Send Us A Message</h2>
                    <img
                        src="https://avada.website/car-dealership/wp-content/uploads/sites/165/2021/12/heading-separator.png"
                        alt=""
                        srcset=""
                    />
                    <div>
                        <form>
                            <div class="row mt-5">
                                <div class="col-lg-6">
                                    <label>First Name</label>
                                    <input type="text" />
                                </div>
                                <div class="col-lg-6">
                                    <label>Last Name</label>
                                    <input type="text" />
                                </div>
                                <div class="col-lg-12 mt-2">
                                    <label>Your Address</label>
                                    <input type="text" />
                                </div>
                                <div class="col-lg-12 mt-2">
                                    <div>
                                        <label>Your Message</label>
                                    </div>
                                    <textarea name="" id=""></textarea>
                                </div>
                                <div class="col-lg-12 mt-5">
                                    <button>SEND MESSAGE</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup></script>
<style scoped>
.div-span {
    display: flex;
}
.div-col-span {
    /* padding: 5px 15px; */
    height: 100px;
    width: 100px;
    background-color: #f5f5f5;
    display: block;
    border-radius: 50px;
}
.span-col {
    font-size: 3rem;
    text-align: center;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 13px;
    color: #2364c4;
}
.sp-hr {
    width: 90%;
    height: 1px;
    display: block;
    background-color: #c9c9c9;
    margin: 10px 0;
}
.div-nm-cnt {
    margin-left: 20px;
    display: flex;
    margin-left: 20px;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
}
img {
    width: 70px;
}
button,
textarea,
input {
    width: 100%;
    height: 60px;
    padding: 0 20px;
    border: 1px solid #00000056;
    outline: none;
}
textarea {
    padding-top: 20px;
    height: 180px;
}
label {
    padding: 10px 0;
}
button {
    background-color: #bd162d;
    color: #fff;
    border: none;
}
.div-form {
    padding-left: 80px;
}
@media (max-width: 992px) {
    .div-form {
        padding-left: 12px;
    }
}
</style>
