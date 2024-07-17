<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
                                >HOME</router-link
                            ></a
                        >
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"
                            ><router-link class="nav-link" to="/about"
                                >CAR RENTAL SEYCHELLES</router-link
                            ></a
                        >
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">CARS AND PRICES</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">FAQ</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">TERMS AND LEGAL NOTICE</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">CONTACT US</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <main>
        <router-view />
    </main>
</template>
<style scoped>
* {
    padding: 0;
    margin: 0;
}

body {
    width: 100%;
    height: 100vh;
}

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
.cont-padd {
    padding: 15px 0;
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
    li.nav-item {
    padding: 6px 0;
}
}
</style>
