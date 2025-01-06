<template>
    <div>
        <div class="container mt-5">
            <div class="row">
                <div class="col-md-4">
                    <h2 class="title-header">Conditions générales de vente</h2>
                    <div class="divsearch">
                        <h3 class="search-title">Recherche dans nos CGV</h3>
                        <div class="divisionsear">
                            <input
                                type="text"
                                class="form-control formcont"
                                aria-label="Amount"
                                placeholder="Faite votre recherche ici"
                                v-model="searchQuery"
                            />
                            <span class="spanserch"
                                ><i class="bi bi-search"></i
                            ></span>
                        </div>
                    </div>
                    <ul class="ulsearch">
                        <li class="lisearch">Généralités</li>
                        <li class="lisearch">
                            Conditions de restitution du véhicule
                        </li>
                        <li class="lisearch">Permis de conduire</li>
                        <li class="lisearch">Tarifs et modes de paiement</li>
                        <li class="lisearch">Assurance</li>
                        <li class="lisearch">
                            Accidents, dommages, et responsabilité du client
                        </li>
                        <li class="lisearch">Politique de confidentialité</li>
                        <li class="lisearch">Divers</li>
                    </ul>
                </div>
                <!-- Contenu de la page avec les sections -->
                <div class="col-md-8">
                    <div v-for="(item, index) in filteredData" :key="index">
                        <h2 class="title-header">{{ item.title }}</h2>
                        <table class="table">
                            <tbody>
                                <tr>
                                    <th scope="row">{{ item.number }}</th>
                                    <td>
                                        {{ item.description }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";

const dataAuto = [
    {
        number: 1,
        title: "Généralités",
        description: `Eva Car Rental est un courtier en location de voitures international. A réception du paiement, nos clients reçoivent les informations de contact de l'agence de location impliquée dans la location.`,
    },
    {
        number: 2,
        description: `Nos services sont offerts à tous les clients, quel que soit leur pays de résidence. La réservation peut être effectuée en français, en allemand, en anglais, ou en chinois. Vous pouvez sélectionner la langue de votre choix en cliquant sur le menu déroulant situé en haut à gauche de notre site web. Pour la version française du site – en particulier lors d'une réservation – c'est bien la version française de ces conditions générales de vente qui fait office de référence.`,
    },
    {
        number: 3,
        description: `Pour toute remise en vente ou en location de nos services, un accord écrit préalable est requis. En effet, de telles réservations sont sujettes à des conditions de vente différentes.`,
    },
    {
        number: 4,
        description: `Le contrat de location mutuellement contraignant devient valide dès que nous confirmons la disponibilité du véhicule. La confirmation de votre réservation peut prendre jusqu'à 48 heures.`,
    },
    {
        number: 5,
        description: `En cas de réservation contradictoire, les informations collectées et affichées systématiquement (modèle, type de transmission, heure et lieu) tout au long du processus de réservation annulent les saisies de texte libres effectuées par le client.`,
    },
];

const searchQuery = ref("");

const filteredData = computed(() => {
    return dataAuto.filter((item) =>
        item.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
});
</script>

<style lang="scss" scoped>
.title-header {
    font-size: 25px;
    color: #2d3e52;
    padding: 5px 20px;
}
.divsearch {
    background-color: #fff;
    padding: 20px;
}
.divisionsear {
    position: relative;
}
.spanserch {
    font-size: 1rem;
    position: absolute;
    top: 0;
    left: 85%;
    width: 15%;
    height: 100%;
    background-color: #899e27;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.formcont {
    border-radius: 8px;
    height: 50px;
}
li {
    list-style: none;
}
.search-title {
    font-size: 20px;
    padding: 8px 0px;
    color: #2d3e52;
}
.ulsearch {
    background-color: #fff;
    margin-top: 20px;
    padding: 20px;
    position: sticky;
    top: 70px;
}
.lisearch {
    margin-top: 5px;
    padding: 5px 10px;
    cursor: pointer;
    color: #2d3e52;
}
.lisearch:hover {
    color: #4a9fef;
    border-left: 1px solid #4a9fef;
}
.divsearch h5 {
    background-color: #6dace6;
    font-size: 20px;
}
.divsearch p {
    background-color: cyan;
}
.table td {
    text-align: justify;
}
</style>
