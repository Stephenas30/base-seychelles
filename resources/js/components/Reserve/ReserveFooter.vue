<template>
<div>
    <div class="container mt-3">
      <div class="divflex">
        <div class="btval">
          <button type="button" class="btnvalidation" @click="returnBtn">⇦ Retour</button>
        </div>
        <div class="btval">
          <button type="button" class="btnvalidation">Valider ⇨</button>
          <p class="parambtnval">
            Vous pourrez vérifier à nouveau vos informations à l'étape suivante, avant de
            finaliser votre réservation.
          </p>
        </div>
      </div>
    </div>
</div>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const returnBtn = () => {
    router.push("/about")
};
</script>
<style scoped>
.btnvalidation {
  background-color: #bd162d;
  color: #fff;
  border: none;
  padding: 15px 30px;
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
}

.btnvalidation:hover {
  background-color: #bd162d;
}

.parambtnval {
  width: 90%;
  padding: 10px;
  margin-top: 10px;
  text-align: justify;
}
.divflex{
  display: flex;
}
.btval{
  width: 50%;
}
</style>