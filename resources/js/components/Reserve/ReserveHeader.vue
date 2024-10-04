<template>
<div>
    <div class="head">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h5 class="h5">
              Complétez le formulaire suivant pour réserver votre voiture
            </h5>
          </div>
          <div class="col-md-6 divisquest">
            <ul class="d-flex">
              <a @click="locationbtn">
                <li class="li">ACCUEIL</li>
              </a>
              <a @click="locationbtn">
                <li class="li">LOCATION DE VOITURES AU SEYCHELLES</li>
              </a>
              <li class="li1">CONTACTEZ-NOUS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const locationbtn = () => {
    router.push('/');
}
</script>

<style scoped>
.head {
  width: 100%;
  background-color: #2d3e52;
  color: #fff;
}

.head a {
  color: #fff;
}

li {
  list-style: none;
}

.h5,
.li {
  /* background-color: aqua; */
  padding: 5px;
  margin-right: 5px;
}

.li {
  font-size: 12px;
  margin-top: 20px;
}

.h5 {
  margin-top: 15px;
  font-size: 1.3em;
}
.li1 {
  color: darkorange;
  font-size: 12px;
  margin-top: 25px;
}
</style>