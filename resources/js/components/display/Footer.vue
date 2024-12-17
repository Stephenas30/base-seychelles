<template>
    <div class="div-foot-div">
        <footer class="bd-footer py-5 mt-5">
            <div class="container py-5">
                <div class="row">
                    <div class="col-lg-3 mb-3">
                        <a
                            class="d-inline-flex align-items-center mb-2 link-dark text-decoration-none"
                            href="/"
                            aria-label="Bootstrap"
                        >
                            <img
                                src="../../../../public/image/logo.png"
                                alt="logo"
                            />
                        </a>
                        <ul class="list-unstyled small text-muted">
                            <li class="mb-2 text-justify">
                                Eva Car Rental Seychelles est votre solution
                                idéale pour louer une voiture et découvrir les
                                merveilles de l’archipel. Située au cœur des
                                Seychelles, notre agence propose une large gamme
                                de véhicules adaptés à vos besoins, que vous
                                soyez en voyage d'affaires, en lune de miel ou
                                en vacances en famille.
                            </li>
                        </ul>
                    </div>
                    <div class="col-6 col-lg-2 offset-lg-1 mb-3">
                        <h5>MENU</h5>
                        <ul class="list-unstyled">
                            <li class="mb-2">
                                <a href="#"
                                    ><router-link class="route-a" to="/"
                                        >CAR RENTAL SEYCHELLES</router-link
                                    ></a
                                >
                            </li>
                            <li class="mb-2">
                                <a href="#"
                                    ><router-link class="route-a" to="/about"
                                        >CARS AND PRICES</router-link
                                    ></a
                                >
                            </li>
                            <li class="mb-2">
                                <a href="#"
                                    ><router-link class="route-a" to="/work"
                                        >FAQ</router-link
                                    ></a
                                >
                            </li>
                            <li class="mb-2">
                                <a href="#"
                                    ><router-link class="route-a" to="/notice"
                                        >TERMS AND LEGAL NOTICE</router-link
                                    ></a
                                >
                            </li>
                            <li class="mb-2">
                                <a href="#"
                                    ><router-link class="route-a" to="/contact"
                                        >CONTACT US</router-link
                                    ></a
                                >
                            </li>
                        </ul>
                    </div>
                    <div class="col-6 col-lg-2 mb-3">
                        <h5>Guides</h5>
                        <ul class="list-unstyled">
                            <li class="mb-2">
                                <a href="#">Getting started</a>
                            </li>
                            <li class="mb-2">
                                <a href="#">Lorem ipsum dolor.</a>
                            </li>
                            <li class="mb-2">
                                <a href="#">Lorem ipsum dolor.</a>
                            </li>
                            <li class="mb-2">
                                <a href="#">Lorem ipsum dolor.</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-6 col-lg-2 mb-3">
                        <h5>PAYEMENT</h5>
                        <ul class="list-unstyled">
                            <li class="mb-2">
                                <a href="#">Lorem ipsum dolor.</a>
                            </li>
                            <li class="mb-2">
                                <a href="#">Lorem ipsum dolor.</a>
                            </li>
                            <li class="mb-2">
                                <a href="#">Lorem ipsum dolor.</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-6 col-lg-2 mb-3">
                        <h5>Contactez-nous</h5>
                        <ul class="list-unstyled">
                            <li class="mb-2">
                                <a href="#"
                                    >Retrouvez nos offres et bénéficiez de
                                    conseils d'experts</a
                                >
                            </li>
                            <li class="mb-2">
                                <a href="#">+49-931-663984-98</a>
                            </li>
                        </ul>
                        <ul class="list-unstyled reseau">
                            <li class="mb-2">
                                <a href="#"><i class="bi bi-facebook"></i></a>
                            </li>
                            <li class="mb-2">
                                <a href="#"><i class="bi bi-instagram"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>
<script setup></script>
<style scoped>
img {
    width: 160px;
}
li,
a {
    text-decoration: none;
    color: #fff;
}
.text-justify {
    text-align: justify;
}
footer {
    background-color: #333;
    color: #fff;
}
.route-a {
    font-size: 13px;
}
.reseau {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    font-size: 1.4rem;
}
</style>
