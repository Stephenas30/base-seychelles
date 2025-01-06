<template>
    <div>
        <div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.5863858985344!2d55.508906274512206!3d-4.670940448692087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x231fd5c71a3dddb1%3A0x798c3d195580eb02!2sA%C3%A9roport%20de%20Victoria-Seychelles!5e1!3m2!1sfr!2smg!4v1735622405542!5m2!1sfr!2smg"
                height="300"
                style="border: 0; width: 100%"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
        <div class="container mt-5">
            <div class="row">
                <div class="col-lg-4">
                    <h2>Informations</h2>
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
                            <h4>+49-931-663984-98</h4>
                            <span class="col-name"
                                >Lorem ipsum dolor sit amet.</span
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
                                >Lorem ipsum dolor sit amet.</span
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
                            <h4>Seychelles</h4>
                            <span class="col-name"
                                >Aéroport de Victoria-Seychelles</span
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
                            <h4>Nos horaires</h4>
                            <span class="col-name"
                                >lundi à vendredi de 8 h à 18 h</span
                            >
                            <span class="col-name">Samedi de 10 h à 15 h</span>
                            <!-- <span class="col-name">Sunday : 10 am to 6 pm</span> -->
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
    color: #ffbf00;
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
