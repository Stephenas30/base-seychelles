<template>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" style="background-color: #fff;">
        <div class="container-fluid cont-padd">
            <a class="navbar-brand" href="#">EVA CAR RENTAL</a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#"
                            ><router-link class="nav-link" to="/"
                                >CAR RENTAL SEYCHELLES</router-link
                            ></a
                        >
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"
                            ><router-link class="nav-link" to="/about"
                                >CARS AND PRICES</router-link
                            ></a
                        >
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><router-link class="nav-link" to="/"
                                >FAQ</router-link
                            ></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><router-link class="nav-link" to="/"
                                >TERMS AND LEGAL NOTICE</router-link
                            ></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><router-link class="nav-link" to="/"
                                >CONTACT US</router-link
                            ></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<style scoped>
.collapse {
    width: 100% !important;
    justify-content: center !important;
}

.navbar-nav {
    width: 90% !important;
    display: flex !important;
    justify-content: space-around !important;
}

.navbar-brand {
    width: 20% !important;
    display: flex !important;
    justify-content: flex-end !important;
}
.nav-item a{
    font-weight: 400;
}
.nav-item a:hover{
    color: #bd162d;
    font-weight: 500;
}
@media (max-width: 1063px) {
    .navbar-nav {
        width: 100% !important;
    }

    .navbar-brand {
        width: auto !important;
    }
}
@media (max-width: 990px) {
    .cont-padd {
        padding: 15px;
    }
}
</style>
