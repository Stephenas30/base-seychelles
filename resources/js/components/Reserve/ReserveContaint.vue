<template>
  <div>
    <div class="container">
      <div class="row">
        <!-- Première colonne -->
        <div class="col-md-8 grandDivforminp">
          <div class="container containToas" v-show="isVisible">
            <div role="alert" aria-live="assertive" aria-atomic="true">
              <div class="toast-body d-flex">
                <span class="spanToasts"
                  ><i class="bi bi-exclamation-circle"></i
                ></span>
                <p class="paraToas">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, neque, est accusamus quod doloremque quae excepturi temporibus pariatur incidunt dolore impedit perferendis tenetur saepe quas itaque. Natus maxime ullam iste.
                </p>
                <span class="icnX"
                  ><i class="bi bi-x" @click="handleClick"></i
                ></span>
              </div>
            </div>
          </div>

          <div class="container cdw">
            <h1 class="votvoiture">Votre voiture</h1>
            <p class="passur">ASSURANCE</p>
            <div class="container">
              <div class="row">
                <div class="col-lg-3 col-md-6 custom-lg-columns p-0 bg-white">
                  <h1></h1>
                  <p class="padleft col1o">Tarifs</p>
                  <p class="padleft">Franchise</p>
                  <p class="padleft col1o">Acompte</p>
                  <p class="padleft">Responsabilité civile</p>
                  <p class="padleft col1o">Protection anti-vol</p>
                  <p class="padleft">Rétroviseurs externes</p>
                  <p class="padleft col1o">Dessous de caisse</p>
                  <p class="padleft">Bris de verre</p>
                  <p class="padleft col1o">Pneus</p>
                  <p class="padleft">Service dépannage</p>
                  <div class="divspan"></div>
                </div>
                <!-- Carte assurance -->
                <div
                  class="col-lg-3 col-md-6 custom-lg-columns p-0 bg-white text-center divpar"
                  :style="{
                    boxShadow: boxShadows[index],
                    transform: transforms[index],
                  }"
                  v-for="(item, index) in dataAssurance"
                  :key="index"
                >
                  <h1 class="cdwcol">{{ item.title }}</h1>
                  <p class="col1o">{{ item.tarif }}</p>
                  <p>{{ item.franchise }}</p>
                  <p class="col1o">{{ item.acompte }}</p>
                  <p><img :src="item.civilResponsability" alt="icon" /></p>
                  <p class="col1o">
                    <img :src="item.antivolProtection" alt="icon" />
                  </p>
                  <p><img :src="item.extRetrovisor" alt="icon x" /></p>
                  <p class="col1o">
                    <img :src="item.underCaisse" alt="icon x" />
                  </p>
                  <p><img :src="item.glassBroken" alt="icon" /></p>
                  <p class="col1o"><img :src="item.pneu" alt="icon" /></p>
                  <p>{{ item.depannageService }}</p>
                  <div class="divspan">
                    <span class="span" @click="changeContent(index)"
                      ><a>{{ buttons[index] }}</a></span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <ol>
              <li>
                pas encore habitué au concept de franchise?<a
                  @click="franchiseBtn"
                  class="addFranchise"
                >
                  Pour en savoir plus, cliquez ici</a
                >
              </li>
              <li>~304 €</li>
              <li>
                seulement pour les dommages au-delà du montant de la franchise
              </li>
              <li>
                jusqu'à 150 million RsMU (~3 million €) de dommages corporels et
                jusqu'à 25 million RsMU (~510 000 €) de dommages matériels
              </li>
              <li>
                seul le service de dépannage premium couvrira également les
                frais de service pour les problèmes auto-infligés avec les
                pneus, la batterie et les clés
              </li>
              <li>~121 €</li>
              <li>
                payable en espèces ou par carte de crédit à la récupération du
                véhicule
              </li>
              <li>
                ex: pour les retards de restitution, le carburant manquant, les
                infractions de la circulation
              </li>
              <li>~81 €</li>
            </ol>
          </div>

          <div>
            <div class="col-md-8">
              <div class="diviformclassnam">
                <div class="mb-3 mt-5">
                  <div class="divisionseardate">
                    <select class="form-control input formcont">
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                    <span class="spandate"
                      ><i class="bi bi-caret-down-fill"></i
                    ></span>
                  </div>
                </div>
                <div class="mb-3">
                  <label for="boiteVitesse" class="form-label formlabelinp"
                    >BOÎTE DE VITESSE</label
                  >
                  <div class="divisionseardate">
                    <select class="form-control input formcont">
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                    <span class="spandate"
                      ><i class="bi bi-caret-down-fill"></i
                    ></span>
                  </div>
                </div>

                <div class="mb-3">
                  <label for="carburant" class="form-label formlabelinp"
                    >POLITIQUE DE CARBURANT</label
                  >
                  <div class="divisionseardate">
                    <select class="form-control input formcont">
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                    <span class="spandate"
                      ><i class="bi bi-caret-down-fill"></i
                    ></span>
                  </div>
                </div>

                <div class="mb-3">
                  <label for="accessoires" class="form-label formlabelinp"
                    >ACCESSOIRES</label
                  >
                  <div class="d-flex flex-wrap">
                    <div class="form-check me-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="gps"
                      />
                      <label class="form-check-label formlabelinpgps" for="gps"
                        >GPS</label
                      >
                      <div class="img-container">
                        <span class="icspgp"
                          ><i class="bi bi-info-circle"></i
                        ></span>
                        <span class="img-title" data-title="TrustPilot">
                          <h6>offert</h6>
                        </span>
                      </div>
                    </div>
                    <div class="form-check me-3">
                      <input
                        min="0"
                        max="2"
                        step="1"
                        size="1"
                        type="number"
                        value="0"
                        class="ms-2 text-center"
                        id="rehausseur"
                      />
                      <label
                        class="form-check-label formlabelinpgps ml-md-5"
                        for="rehausseur"
                        >REHAUSSEUR</label
                      >
                      <div class="img-container">
                        <span class="icspgp"
                          ><i class="bi bi-info-circle"></i
                        ></span>
                        <span class="img-title" data-title="TrustPilot">
                          <h6>offert</h6>
                        </span>
                      </div>
                    </div>
                    <div class="form-check">
                      <input
                        min="0"
                        max="2"
                        step="1"
                        size="1"
                        type="number"
                        value="0"
                        v-model="siegeBebe"
                        class="ms-2 text-center"
                        id="siegeBebe"
                      />

                      <label
                        class="form-check-label formlabelinpgps ml-md-5"
                        for="siegeBebe"
                        >SIÈGE BÉBÉ</label
                      >
                      <div class="img-container">
                        <span class="icspgp"
                          ><i class="bi bi-info-circle"></i
                        ></span>
                        <span class="img-title" data-title="TrustPilot">
                          <h6>Tarif par jour</h6>
                        </span>
                      </div>
                    </div>
                    <p class="paramMer">
                      {{ texteAffiche }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr class="mt-5" />
          <form class="row g-3">
            <div class="col-md-6 cles">
              <h2 class="h2coO">Coordonnées</h2>
            </div>
            <div class="col-md-6 cles">
              <p class="pfacult">* = facultatif</p>
            </div>
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">CIVILITÉ</label>
              <div class="divisionseardate">
                <select class="form-control input formcont">
                  <option selected>M.</option>
                  <option>Mme.</option>
                </select>
                <span class="spandate"
                  ><i class="bi bi-caret-down-fill"></i
                ></span>
              </div>
            </div>
            <div class="col-md-6"></div>
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label formlabelinp"
                >PRÉNOM</label
              >
              <input type="text" class="form-control input" id="inputEmail4" />
              <div class="form-text">Veuillez saisir votre prénom.</div>
            </div>
            <div class="col-md-6">
              <label for="inputPassword4" class="form-label formlabelinp"
                >NOM DE FAMILLE</label
              >
              <input
                type="text"
                class="form-control input"
                id="inputPassword4"
              />
              <div class="form-text">Veuillez saisir votre nom de famille.</div>
            </div>
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label formlabelinp"
                >RUE / NUMÉRO</label
              >
              <input type="text" class="form-control input" id="inputEmail4" />
              <div class="form-text">
                Veuilez saisir le numéro et le nom de votre rue.
              </div>
            </div>
            <div class="col-md-6">
              <label for="inputPassword4" class="form-label formlabelinp"
                >CODE POSTAL* / VILLE</label
              >
              <input
                type="text"
                class="form-control input"
                id="inputPassword4"
              />
              <div class="form-text">
                Veuillez saisir le nom de votre ville.
              </div>
            </div>
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label formlabelinp"
                >PAYS</label
              >
              <div class="divisionseardate">
                <select class="form-select input formcont">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
                <span class="spandate"
                  ><i class="bi bi-caret-down-fill"></i
                ></span>
              </div>
            </div>
            <div class="col-md-6"></div>
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label formlabelinp"
                >VOTRE ADRESSE EMAIL</label
              >
              <input type="email" class="form-control input" id="inputEmail4" />
              <div class="form-text">
                Nous avons besoin de votre adresse mail pour communiquer avec
                vous. Nous n'allons pas vous envoyer d'emails non sollicités ou
                vendre vos données personnelles !
              </div>
            </div>
            <div class="col-md-6">
              <label for="inputPassword4" class="form-label formlabelinp"
                >VOTRE NUMÉRO DE TÉLÉPHONE*</label
              >
              <input
                type="tel"
                class="form-control input"
                id="inputPassword4"
              />
            </div>
          </form>
          <hr class="mt-5" />
          <h2 class="h2coO mt-3">Informations de paiement</h2>
          <p class="pfacult">MODE DE PAIEMENT</p>
          <div class="container-fluid mt-3">
            <div class="row">
              <!-- Première ligne -->
              <div class="col-md-6 col-sm-12">
                <div class="divisinp">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="option1"
                    checked
                  />
                  <ul class="ulclassname">
                    <li>
                      VIREMENT BANCAIRE (COMPTE BANCAIRE SITUE EN ALLEMANGNE)
                    </li>
                    <li class="d-flex">
                      <span>DEVISE:</span
                      ><select id="inputState" class="form-select selecbtninp">
                        <option selected>Euro</option>
                      </select>
                    </li>
                    <li>
                      <span class="spanlioption"> {{ buttonText }}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-md-6 col-sm-12">
                <div class="divisinp">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="option1"
                    checked
                  />
                  <ul class="ulclassname">
                    <li>PAYPAL (Y COMPRIS LES CARTES DE CREDIT)</li>
                    <li class="d-flex">
                      <span>DEVISE:</span
                      ><select id="inputState" class="form-select selecbtninp">
                        <option selected>Euro</option>
                      </select>
                    </li>
                    <li>
                      <span class="spanlioption"> {{ buttonText }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="row">
              <!-- Deuxième ligne -->
              <div class="col-md-6 col-sm-12">
                <div class="divisinp">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="option1"
                    checked
                  />
                  <ul class="ulclassname">
                    <li>CARTE CREDIT (VISA, MASTERCARD)</li>
                    <li class="d-flex">
                      <span>DEVISE:</span
                      ><select id="inputState" class="form-select selecbtninp1">
                        <option selected>Dollard australien</option>
                      </select>
                    </li>
                    <li>
                      <span class="spanlioption">REGLER 100% MAINTENANT</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-md-6 col-sm-12">
                <div class="divisinp">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    @click="changeText"
                  />
                  <ul class="ulclassname">
                    <li>PAYEMENT SUR PLACE (EN ESPECES)</li>
                    <li class="d-flex">
                      <span>DEVISE:</span
                      ><select id="inputState" class="form-select selecbtninp1">
                        <option selected>Roupie mauricienne</option>
                      </select>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr class="mt-5" />
          <form class="row g-3">
            <div class="col-md-6 cles">
              <h2 class="h2coO">Informations suplémentaires</h2>
            </div>
            <div class="col-md-6 cles">
              <p class="pfacult">* = facultatif</p>
            </div>
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label formlabelinp"
                >N° DE VOTRE VOL D'ARRIVÉE*</label
              >
              <input type="text" class="form-control input" id="inputEmail4" />
            </div>
            <div class="col-md-6">
              <label for="inputPassword4" class="form-label formlabelinp"
                >N° DE VOTRE VOL RETOUR*</label
              >
              <input
                type="text"
                class="form-control input"
                id="inputPassword4"
              />
            </div>
            <div class="col-md-10">
              <label for="inputAddress" class="form-label">HÔTEL*</label>
              <input type="text" class="form-control input" id="inputAddress" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label"
                >SOUHAITS PARTICULIERS*</label
              >
              <textarea
                class="form-control inputArea"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div class="form-check marge">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault"
                >JE CONFIRME AVOIR LU ET APPROUVÉ LES CGV.</label
              >
              <div class="form-text formtextmaj">
                VOUS DEVEZ ACCEPTER NOS CONDITIONS DE VENTE AFIN DE FINALISER
                UNE RÉSERVATION.
              </div>
            </div>
            <div class="form-check marge">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault"
                >LES CONDUCTEURS DOIVENT ÊTRE ÂGÉS D'AU MOINS 21 ANS AU MOMENT
                DE LA LOCATION.</label
              >
              <div class="form-text formtextmaj">REQUIS</div>
            </div>
          </form>
        </div>

        <!-- Deuxième colonne -->
        <div class="col-md-4">
          <div class="headers">
            <h2 class="Votres">Votre réservation</h2>
            <div class="clearfixe text-center">
              <img
                src="../../../assets/image/HomeImg/photos4.png"
              />
              <h5 class="h5name">name</h5>
              <small>AUTOMATIQUE</small>
            </div>
            <div>
              <div class="date">
                <p class="pcal">
                  <span class="spcal"
                    ><i class="bi bi-calendar2-minus-fill"></i></span
                  >DATE
                </p>
                <p class="dated">
                  04/01/2024 <i class="bi bi-arrows"></i> 09/01/2024
                </p>
              </div>
              <div class="date">
                <p class="pcal">
                  <span class="spcal"><i class="bi bi-clock"></i></span>HEURE
                </p>
                <p class="dated">09:00 HEURES</p>
              </div>
              <div class="date">
                <p class="pcal">
                  <span class="spcal"><i class="bi bi-geo-alt"></i></span>LIEU
                </p>
                <p class="dated">INTERNATIONAL AIRPORT SSR (MRU)</p>
              </div>
              <div class="dtn"></div>
            </div>
            <div>
              <p class="pardec">
                <span class="spandec">Description</span
                ><span class="spantar">Tarifs</span>
              </p>
              <p class="pardec bordB">
                <span class="spandec spancolBl">LIVRAISON</span
                ><span class="spantar">0,00 €</span>
              </p>
              <p class="pardec bordB">
                <span class="spandec spancolBl">LOCATION</span
                ><span class="spantar">4x28,41 €</span>
              </p>
              <p class="pardec bordB">
                <span class="spandec spancolBl">RETOUR</span
                ><span class="spantar">0,00 €</span>
              </p>
              <p class="pardec bordB">
                <span class="spandec spancolBl">ASSURANCE</span
                ><span class="spantar">0,00 €</span>
              </p>
              <p class="pardec bordB">
                <span class="spandec">TOTAL</span
                ><span class="spantar spantotal">139,62 €</span>
              </p>
            </div>
          </div>
          <div class="headers">
            <h1 class="contactnous">Contactez-nous</h1>
            <p class="param">
              Retrouvez nos offres et bénéficiez de conseils d'experts
            </p>
            <div class="divCont">
              <div>
                <p class="paraTel">
                  <span class="drap"
                    ><i class="bi bi-telephone-inbound-fill"></i></span
                  >+49-931-663984-98
                </p>
                <p class="paraTel">
                  <span class="drap"><i class="bi bi-telephone-fill"></i></span
                  >+248-2603261
                </p>
              </div>
            </div>
          </div>
          <div class="headers">
            <p class="param">
              Nos coupons sont aussi disponibles sur l'application Wallet
              d'Apple ou sur l'application WalletPasses d'Android.
            </p>
            <div class="divCont">
              <div class="text-center">
                <img
                  alt="Wallet"
                  src="https://d12ittivwictyd.cloudfront.net/images/passbook_hand.png"
                />
              </div>
              <div class="text-center mt-5">
                <img
                  alt="Verified by Visa"
                  src="https://d12ittivwictyd.cloudfront.net/images/vbvisa.png"
                />
              </div>
              <div class="text-center mt-5">
                <img
                  class="paypalcount"
                  alt="Official PayPal Seal"
                  src="https://d12ittivwictyd.cloudfront.net/images/paypal_verified.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
// import check from "../../../assets/icons/check.svg";
// import checkround from "../../../assets/icons/checkround.svg";
// import warning from "../../../assets/icons/warning.svg";

import check from "../../../../public/image/check.svg";
import checkround from "../../../../public/image/checkround.svg";
import warning from "../../../../public/image/warning.svg";


import { ref,watch } from "vue";

const isVisible = ref(true);

const handleClick = () => {
  isVisible.value = false;
};
const router = useRouter();

const dataAssurance = [
  {
    title: "CDW",
    tarif: "inclus",
    franchise: "15 000 RsMU²",
    acompte: "aucun",
    civilResponsability: checkround,
    antivolProtection: checkround,
    extRetrovisor: check,
    underCaisse: check,
    glassBroken: warning,
    pneu: warning,
    depannageService: "standard",
    button: "choisir",
  },
  {
    title: "SCDW",
    tarif: "5,06 € par jour",
    franchise: "aucun",
    acompte: "6 000 RsMU",
    civilResponsability: checkround,
    antivolProtection: checkround,
    extRetrovisor: check,
    underCaisse: check,
    glassBroken: checkround,
    pneu: checkround,
    depannageService: "standard",
    button: "choisir",
  },
  {
    title: "SCDW+",
    tarif: "7,89 € par jour",
    franchise: "aucun",
    acompte: "4 000 RsMU",
    civilResponsability: checkround,
    antivolProtection: checkround,
    extRetrovisor: checkround,
    underCaisse: checkround,
    glassBroken: checkround,
    pneu: checkround,
    depannageService: "premium5",
    button: "choisir",
  },
];

const franchiseBtn = () => {
  router.push("/franchise");
};

const boxShadows = ref([
  "0 10px 20px rgba(0, 0, 0, 0.3), 0 30px 50px rgba(0, 0, 0, 0.5)",
  "none",
  "none",
]);
const transforms = ref(["scale(1.02)", "none", "none"]);

const buttons = ref(["votre choix", "choisir", "choisir"]);

const changeContent = (index) => {
  transforms.value.fill("scale(1)");
  boxShadows.value.fill("none");

  buttons.value.fill("choisir");
  buttons.value[index] = "votre choix";

  transforms.value[index] = "scale(1.02)";
  boxShadows.value[index] =
    "0 10px 20px rgba(0, 0, 0, 0.3), 0 30px 50px rgba(0, 0, 0, 0.5)";
};

const buttonText = ref("REGLER 100% MAINTENANT");

const changeText = () => {
  buttonText.value =
    buttonText.value === "REGLER 100% MAINTENANT"
      ? "REGLER SEULEMENT 16 € MAINTENANT"
      : "REGLER 100% MAINTENANT";
};

const siegeBebe = ref(0);

const texteAffiche = ref("");

watch(siegeBebe, (newValue) => {
  if (newValue === 1 || newValue === 2) {
    texteAffiche.value = "Merci de nous indiquer l'âge et le poids de votre enfant dans le champ Souhaits particuliers.";
  } else {
    texteAffiche.value = "";
  }
});
</script>

<style scoped>
.Votres {
  /* background-color: aqua; */
  font-size: 18px;
  margin-top: 20px;
}

.h5name {
  /* background-color: cadetblue; */
  font-size: 16px;
  margin-top: 10px;
}

.clearfixe small {
  /* background-color: crimson; */
  margin-top: -6px;
  display: block;
  font-size: 13px;
}
.clearfixe img{
  width: 208px;
  height: auto;
}
/* toasts */
.containToas {
  background-color: #6dace6;
  margin-top: 20px;
  padding: 10px;
}

.spanToasts {
  /* background-color: chartreuse; */
  font-size: 2em;
  padding-right: 10px;
  color: #fff;
  margin: 0px;
}

.icnX {
  font-size: 1.5rem;
  /* background-color: #bd162d; */
  margin-top: -15px;
  margin-left: 10px;
  padding: 5px;
  color: #fff;
}
.icnX i {
  cursor: pointer;
}

.paraToas {
  /* background-color: aqua; */
  font-size: 16px;
  color: #fff;
  /* margin-top: 10px; */
  margin: 0px;
  text-align: justify;
}

.pcal {
  /* background-color: chartreuse; */
  font-size: 14px;
  color: #6dace6;
}

.date {
  /* background-color: deeppink; */
  padding-top: 20px;
}

.spcal {
  /* background-color: crimson; */
  padding: 10px;
  color: #bd162d;
  font-size: 1rem;
}

.dated {
  /* background-color: coral; */
  padding-left: 36px;
  margin-top: -16px;
  font-size: 14px;
}

.pardec {
  /* background-color: chartreuse; */
  display: flex;
  justify-content: space-between;
  margin: 0px;
  font-size: 16px;
}

.spancolBl {
  color: #6dace6;
  font-size: 16px;
}

.bordB {
  border-top: 1px solid black;
}

.spandec {
  /* background-color: coral; */
  padding-top: 10px;
}

.spantar {
  /* background-color: aquamarine; */
  padding-top: 10px;
}

.spantotal {
  color: #bd162d;
}

.grandDivforminp,
.headers {
  background-color: #fff;
  padding: 20px;
  margin-top: 20px;
}

/*  */
.contactnous {
  font-size: 20px;
}

.param {
  font-size: 16px;
}

.paraTel {
  /* background-color: #bd162d; */
  font-size: 1.5rem;
  color: #6dace6;
}

.drap {
  /* background-color: #6dace6; */
  padding: 10px;
  font-size: 20px;
  color: #bd162d;
}

/* cdw */
.votvoiture {
  font-size: 25px;
  margin-left: 10px;
  color: #2d3e52;
}

.passur {
  font-size: 14px;
  margin-left: 10px;
  color: #2d3e52;
}

.cdw {
  /* background-color: aquamarine; */
  margin-top: 20px;
  margin-bottom: 30px;
  padding: 10px;
}

.custom-lg-columns h1 {
  /* border: 2px solid #333; */
  margin: 0px;
  padding-top: 5px;
  height: 58px;
  font-size: 2.5rem;
  color: #fff;
}

.custom-lg-columns p {
  /* border: 2px solid #333; */
  margin: 0px;
  height: 35px;
  padding: 5px;
  color: #444;
}

.custom-lg-columns .span {
  display: block;
  /* background-color: crimson; */
  width: 60%;
  padding: 5px 0px;
  margin: 10px auto;
  border: 1px solid #333;
  cursor: pointer;
}

.custom-lg-columns .span a {
  color: #333;
}

.padleft {
  padding-left: 10px;
  white-space: nowrap;
}

.col1o {
  background-color: #e3e3e3;
}

.cdwcol {
  background-color: #bd162d;
}

.scdwcol {
  background-color: #bd162d;
}

.scdwplus {
  background-color: #bd162d;
}

.divspan {
  height: 60px;
  padding-top: 2px;
  background-color: #e3e3e3;
}

.bi-check-circle-fill {
  color: #bd162d;
}

.bi-exclamation-triangle-fill {
  color: #bd162d;
}

.hoveredTab1 {
  position: relative;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3), 0 30px 50px rgba(0, 0, 0, 0.5);
  transform: scale(1.02);
}

ol li {
  list-style: decimal;
  /* background-color: red; */
  font-size: 16px;
}

.formlabelinpgps,
.formlabelinp {
  font-size: 14px;
}

.formlabelinpgps {
  margin-left: 2px;
  color: #444;
}
ul li{
  list-style: none;
}
.icspgp {
  /* background-color: #bd162d; */
  margin-left: 5px;
  color: #bd162d;
}
.h2coO {
  /* background-color: #bd162d; */
  font-size: 25px;
  padding-top: 20px;
}

.pfacult {
  /* background: #bd162d; */
  padding-top: 20px;
  font-size: 16px;
}

.ulclassname {
  /* background-color: chartreuse; */
  width: 80%;
  padding-left: 5px;
  font-size: 14px;
}

.ulclassname li {
  /* background-color: red; */
  margin-top: 5px;
}

.ulclassname span {
  /* background-color: #bd162d; */
  padding-top: 5px;
}

.divisinp {
  display: flex;
  /* background-color: hotpink; */
  margin: 10px;
  padding-top: 15px;
  padding-left: 10px;
  background-color: #e3e3e3;
}

.spanlioption {
  color: #6dace6;
}

.selecbtninp1,
.selecbtninp {
  font-size: 12px;
  background-color: #e3e3e3;
  border: none;
}

.selecbtninp {
  width: 80px;
}

.selecbtninp1 {
  width: 150px;
}

.marge {
  /* background-color: blueviolet; */
  margin-left: 10px;
}

label {
  font-size: 16px;
}

.input {
  border-radius: 8px;
  height: 50px;
}
.inputArea{
  border-radius: 8px;
  height: 150px;
}

.form-check-input {
  cursor: pointer;
}

.paramMer {
  /* background-color: #bd162d; */
  margin-top: 10px;
  font-size: 14px;
  padding: 0px;
  color: #6dace6;
}

.paypalcount {
  cursor: pointer;
}

.form-text {
  color: red;
}

.formtextmaj {
  font-size: 14px;
}

/*  */
.divisionseardate {
  position: relative;
  margin: 15px 0px;
  top: -15px;
  bottom: 0px;
}

.spandate {
  font-size: 1rem;
  position: absolute;
  z-index: 5;
  top: 0;
  left: 85%;
  width: 15%;
  height: 100%;
  background-color: #bd162d;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.formcont::-webkit-calendar-picker-indicator {
  position: relative;
  z-index: 20;
  cursor: pointer;
  opacity: 0;
}

/* span hover */

.img-container {
  position: relative;
  display: inline-block;
  /* background-color: #bd162d; */
  cursor: pointer;
}

.img-title {
  width: 500%;
  position: absolute;
  top: -110%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(178, 216, 178);
  color: rgba(0, 0, 0, 0.585);
  border: 2px solid rgb(60, 164, 60);
  padding: 5px;
  border-radius: 3px;
  font-size: 12px;
  text-align: center;
  display: none;
}

.img-container:hover .img-title {
  display: inline-block;
}
/* .divpar:hover {
   transform: scale(1.02);
   position: relative;
   box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3), 0 30px 50px rgba(0, 0, 0, 0.5);
 } */
.addFranchise {
  color: #6dace6;
  cursor: pointer;
}
</style>
