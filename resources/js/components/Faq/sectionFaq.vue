<template>
    <div>
        <div class="container mt-5">
            <div class="row division-position">
                <div class="col-md-4">
                    <div class="divsearch">
                        <h3 class="search-title">Recherche dans notre FAQ</h3>
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
                        <li class="lisearch">
                            Le système de réservation en ligne
                        </li>
                        <li class="lisearch">Accidents et pannes</li>
                        <li class="lisearch">
                            Les règles de circulation routière
                        </li>
                        <li class="lisearch">
                            Politique d'assurance et de responsabilité
                        </li>
                        <li class="lisearch">
                            Tarifs et autres conditions de location
                        </li>
                        <li class="lisearch">Conditions de paiement</li>
                        <li class="lisearch">À propos de Eva Car Rental</li>
                    </ul>
                </div>
                <!-- Contenu de la page avec les sections -->
                <div class="col-md-8">
                    <div
                        class="toast-body divi1"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                        v-show="isVisible"
                    >
                        <div class="div1">
                            <span class="span1"
                                ><i class="bi bi-exclamation-circle"></i
                            ></span>
                        </div>
                        <div class="div2">
                            <p class="param1">
                                Vous êtes bien sur la version adaptée à la
                                destination choisie : Seychelles.
                            </p>
                        </div>
                        <div class="div3">
                            <span class="spanicone1"
                                ><i class="bi bi-x" @click="handleClick"></i
                            ></span>
                        </div>
                    </div>

                    <div class="res-position"></div>

                    <div
                        class="container p-0"
                        v-for="(item, index) in filteredData"
                        :key="index"
                    >
                        <p class="h1faq" @click="toggleIconNext(index)">
                            <a
                                data-bs-toggle="collapse"
                                :href="'#collapseExample' + index"
                                role="button"
                                :aria-expanded="
                                    isIconChanged[index] ? 'true' : 'false'
                                "
                                :aria-controls="'collapseExample' + index"
                            >
                                {{ item.title }}
                            </a>
                            <span v-if="!isIconChanged[index]"
                                ><i class="bi bi-chevron-down"></i
                            ></span>
                            <span v-else><i class="bi bi-chevron-up"></i></span>
                        </p>
                        <div
                            :class="{
                                collapse: isIconChanged[index],
                                show: !isIconChanged[index],
                            }"
                            :id="'collapseExample' + index"
                        >
                            <div class="card card-body paramfaq">
                                {{ item.message }}
                            </div>
                        </div>
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
        title: "Le système de réservation en ligne",
        message: `La réservation en ligne ne prend que cinq minutes environ. D'abord, vous devez sélectionner le lieu de départ et d'arrivée, la période de réservation, puis vous devez cliquer sur le bouton "Afficher les offres". Vous obtiendrez une liste de toutes les voitures disponibles ainsi que le prix total de location, qui inclue les frais de livraison et de retour. Vous pouvez ensuite choisir l'une des voitures disponibles en cliquant sur le bouton "Réserver !" situé juste en-dessous du prix de chaque voiture. Sur la page suivante, vous pouvez fournir des détails supplémentaires, comme les options de paiement et d'assurance souhaitées, et bien sûr, votre nom et votre adresse. Ensuite, vous devrez confirmer l'ensemble de vos données avant de finaliser le processus de réservation. Immédiatement après avoir effectué cette réservation, vous recevrez un email vous informant que nous avons bien reçu votre demande. En parallèle, l'un de nos partenaires locaux sera prévenu. Dès que nous avons son feu vert, nous vous enverrons par mail la confirmation de réservation ainsi que la facture.`,
    },
    {
        title: "Accidents et pannes",
        message: `En cas d'accident, vous devez informer au plus tôt l'assistance téléphonique dont le numéro est indiqué sur votre confirmation de réservation. Chez Maki Car Rental, nos conseillers sont disponibles 24h/24. Un conseiller mettra à votre disposition une voiture de remplacement et vous aidera avec les formalités administratives, comme remplir un rapport de police, ce qui est obligatoire pour votre assurance.
  Si la police conclut qu'un tiers est entièrement responsable de l'accident, vous n'aurez rien à payer. Si vous êtes en tort et que le montant des dommages est égal ou supérieur à votre franchise, alors nous ne prélèverons que le montant maximum.`,
    },
    {
        title: "Les règles de circulation routière",
        message: `À l'île Maurice, comme dans toutes les anciennes colonies britanniques, vous devez conduire à gauche. Sauf indication contraire, la limite de vitesse pour les autoroutes est de 90 km/h. Dans les villes, la vitesse est limitée à 50 km/h, et sur toutes les autres routes, à 60 km/h.`,
    },
    {
        title: "Politique d'assurance et de responsabilité",
        message: `Toutes les voitures de Maki Car Rental ont une assurance multirisque, incluant la protection contre le vol et une assurance responsabilité civile. L'assurance couvre tous les cas sauf les accidents occasionnés par la conduite sous influence, la violation des termes de la location ou la négligence coupable. La perte ou les dommages des clés du véhicule et des biens personnels ne sont pas couverts. D'autres éléments non couverts par l'assurance (ex: les pneus) vous seront présentés lors de la procédure de réservation en fonction de votre choix du pack d'assurance.`,
    },
    {
        title: " Tarifs et autres conditions de location",
        message: `Les prix affichés chez Maki Car Rental sont saisonniers. Par ailleurs, nous appliquons automatiquement des remises en fonction de la durée de la location. Le prix exact dépend du type de voiture. Pour connaître les détails, suivez ces consignes : Rendez-vous sur la page "Voitures et tarifs" et maintenez votre curseur au-dessus du prix de la voiture qui vous intéresse. Bien sûr, notre système de réservation calcule le prix total automatiquement une fois que vous renseignez la durée de location.`,
    },
    {
        title: "Conditions de paiement",
        message: `Les prix mentionnés sur notre site sont les tarifs en pré-paiement, vous devez donc régler à l'avance. Cependant, il y a deux exceptions :
  
  Si vous optez pour notre assurance annulation, vous pouvez choisir de payer la voiture en espèces lors de sa livraison. Les frais de cette assurance doivent cependant être payés à l'avance. Pour ce faire, vous pouvez choisir l'un des modes de paiement habituels.
  
  Pour les réservations de dernière minute (moins de 48 heures avant la livraison), il est généralement possible de payer sur place, même si vous ne prenez pas l'assurance.
  
  Nous avons mis en place cette politique pour garantir le sérieux de votre réservation. Nous mettons en effet de côté une voiture pour vous, que nous livrons à votre convenance.`,
    },
];

const isIconChanged = ref(Array(dataAuto.length).fill(false));
const searchQuery = ref("");

const filteredData = computed(() => {
    return dataAuto.filter((item) =>
        item.message.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
});

const toggleIconNext = (index) => {
    isIconChanged.value[index] = !isIconChanged.value[index];
};

const isVisible = ref(true);

const handleClick = () => {
    isVisible.value = false;
};
</script>

<style lang="scss" scoped>
.custom-hover:hover {
    color: #6dace6;
}
.divsearch {
    background-color: #fff;
    padding: 20px;
    color: #2d3e52;
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
.search-title {
    font-size: 20px;
    padding: 8px 0px;
    color: #2d3e52;
}
.ulsearch {
    background-color: #f5f5f5;
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

/* example */
.divi1 {
    background-color: #f5cf77;
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}
.div1 {
    /* background-color: #899e27; */
    width: 10%;
    padding: 5px;
}
.div2 {
    /* background-color: aquamarine; */
    width: 80%;
}
.div3 {
    /* background-color: crimson; */
    width: 5%;
}
.span1 {
    /* background-color: chartreuse; */
    font-size: 2rem;
    color: #2d3e52;
}
.param1 {
    /* background-color: lightpink; */
    padding: 15px 0px;
    font-weight: bold;
    color: #2d3e52;
}
.spanicone1 {
    /* background-color: slategray; */
    font-size: 2rem;
    cursor: pointer;
    color: #fff;
}
/* style param */
.h1faq {
    background-color: #f5f5f5;
    font-size: 20px;
    margin-top: 20px;
    color: #2d3e52;
    width: 100%;
    display: flex;
    border-radius: 10px;
}
.h1faq a {
    width: 90%;
    // background-color: red;
    padding: 5px 10px;
}
.h1faq span {
    width: 10%;
    // background-color: #f5cf77;
    font-size: 1.2rem;
    padding: 5px 15px;
    color: #333;
    font-weight: 900;
    text-align: center;
    padding: 10px 0px;
}
a {
    color: #333;
}
.paramfaq {
    // background-color: #f5cf77;
    margin-top: 10px;
    text-align: justify;
    border: none;
}
li {
    list-style: none;
}
.bi-chevron-down,
.bi-chevron-up {
    //   transition: transform 0.5s ease;
    cursor: pointer;
}
.division-position {
    position: relative;
    // background-color: red;
}
.res-position {
    height: 160px;
    // background-color: red;
    display: none;
}
@media (max-width: 768px) {
    .ulsearch {
        display: none;
    }
    .res-position {
        display: flex;
    }
    .divsearch {
        position: absolute;
        top: 185px;
        width: 95%;
        margin-bottom: 100px;
        // background: red;
    }
    .div3 {
        display: none;
    }
}

@media (max-width: 376px) {
    .param1 {
        padding: 15px;
        text-align: justify;
    }
}
</style>
