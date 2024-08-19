<template>
    <nav
        class="navbar navbar-expand-lg navbar-light"
        style="background-color: #fff"
    >
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
          @click="toggleButtonText"
        >
          <i :class="buttonIconClass"></i>
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
                        <a class="nav-link" href="#"
                            ><router-link class="nav-link" to="/faq"
                                >FAQ</router-link
                            ></a
                        >
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"
                            ><router-link class="nav-link" to="/notice"
                                >TERMS AND LEGAL NOTICE</router-link
                            ></a
                        >
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"
                            ><router-link class="nav-link" to="/contact"
                                >CONTACT US</router-link
                            ></a
                        >
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script setup>
import { ref } from 'vue';

const buttonIconClass = ref('bi bi-list');

function toggleButtonText() {
  if (buttonIconClass.value === 'bi bi-list') {
    buttonIconClass.value = 'bi bi-x';
  } else {
    buttonIconClass.value = 'bi bi-list';
  }
}
</script>
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
.nav-item a {
    font-weight: 400;
}
.nav-item a:hover {
    color: #bd162d;
    font-weight: 500;
}
.navbar-toggler i{
    font-size: 35px;
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
    .nav-item {
        background-color: #bd162d;
        padding-left: 8px;
        margin: 5px 0;
    }
    .nav-item a {
        color: #fff;
    }
    .nav-item a:hover {
        color: #fff;
    }
    .navbar-nav{
        margin-top: 10px;
    }
}
</style>
