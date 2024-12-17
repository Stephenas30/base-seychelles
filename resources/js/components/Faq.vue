<template>
    <div>
        <headerFaq />
        <div class="container mt-5">
            <h1 class="mt-5 mb-5">Frequently Asked Questions</h1>
            <div class="row">
                <div class="col-lg-4">
                    <div
                        class="nav nav-pills faq-nav"
                        id="faq-tabs"
                        role="tablist"
                        aria-orientation="vertical"
                    >
                        <a
                            href="#tab1"
                            class="nav-link active"
                            data-bs-toggle="pill"
                            role="tab"
                            aria-controls="tab1"
                            aria-selected="true"
                        >
                            <i class="mdi mdi-help-circle"></i> Le système de
                            réservation en ligne
                        </a>

                        <a
                            href="#tab2"
                            class="nav-link"
                            data-bs-toggle="pill"
                            role="tab"
                            aria-controls="tab2"
                            aria-selected="false"
                        >
                            <i class="mdi mdi-account"></i> Accidents et pannes
                        </a>
                        <!--  -->
                        <a
                            href="#tab3"
                            class="nav-link"
                            data-bs-toggle="pill"
                            role="tab"
                            aria-controls="tab3"
                            aria-selected="false"
                        >
                            <i class="mdi mdi-account-settings"></i> Les règles
                            de circulation routière
                        </a>
                        <a
                            href="#tab4"
                            class="nav-link"
                            data-bs-toggle="pill"
                            role="tab"
                            aria-controls="tab4"
                            aria-selected="false"
                        >
                            <i class="mdi mdi-heart"></i> Politique d'assurance
                            et de responsabilité
                        </a>
                        <a
                            href="#tab5"
                            class="nav-link"
                            data-bs-toggle="pill"
                            role="tab"
                            aria-controls="tab5"
                            aria-selected="false"
                        >
                            <i class="mdi mdi-coin"></i> Tarifs et autres
                            conditions de location
                        </a>
                    </div>
                </div>
                <!-- Nav tabs -->

                <!-- Tab content -->
                <div class="col-lg-8">
                    <div class="tab-content">
                        <!-- Tab 1 -->
                        <div
                            class="tab-pane fade show active"
                            id="tab1"
                            role="tabpanel"
                        >
                            <div class="accordion" id="accordion-tab-1">
                                <!-- Card 1 -->
                                <div class="card">
                                    <div
                                        class="card-header"
                                        id="accordion-tab-1-heading-1"
                                    >
                                        <h5 class="accordion-header">
                                            <button
                                                class="btn btn-link accordion-button"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#accordion-tab-1-content-1"
                                                aria-expanded="true"
                                                aria-controls="accordion-tab-1-content-1"
                                            >
                                                Lorem ipsum dolor sit, amet
                                                consectetur adipisicing elit?
                                            </button>
                                        </h5>
                                    </div>
                                    <div
                                        class="collapse show accordion-collapse"
                                        id="accordion-tab-1-content-1"
                                        aria-labelledby="accordion-tab-1-heading-1"
                                        data-bs-parent="#accordion-tab-1"
                                    >
                                        <div class="card-body">
                                            <p>
                                                Lorem ipsum dolor sit, amet
                                                consectetur adipisicing elit.
                                                Nesciunt ea eveniet, aliquid
                                                inventore dolore sit perferendis
                                                suscipit amet in! Debitis omnis
                                                assumenda corrupti aut
                                                accusantium sapiente illo
                                                quisquam natus at?
                                            </p>
                                            <p>
                                                <strong>Example: </strong>Lorem
                                                ipsum dolor sit, amet
                                                consectetur adipisicing elit.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <!-- Card 2 -->
                                <div class="card">
                                    <div
                                        class="card-header"
                                        id="accordion-tab-1-heading-2"
                                    >
                                        <h5 class="accordion-header">
                                            <button
                                                class="btn btn-link accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#accordion-tab-1-content-2"
                                                aria-expanded="false"
                                                aria-controls="accordion-tab-1-content-2"
                                            >
                                                Lorem ipsum dolor sit, amet
                                                consectetur adipisicing elit?
                                            </button>
                                        </h5>
                                    </div>
                                    <div
                                        class="collapse accordion-collapse"
                                        id="accordion-tab-1-content-2"
                                        aria-labelledby="accordion-tab-1-heading-2"
                                        data-bs-parent="#accordion-tab-1"
                                    >
                                        <div class="card-body">
                                            <p>
                                                Lorem ipsum dolor sit, amet
                                                consectetur adipisicing elit.
                                                Nesciunt ea eveniet, aliquid
                                                inventore dolore sit perferendis
                                                suscipit amet in! Debitis omnis
                                                assumenda corrupti aut
                                                accusantium sapiente illo
                                                quisquam natus at?
                                            </p>
                                            <p>
                                                <strong>Example: </strong>Lorem
                                                ipsum dolor sit, amet
                                                consectetur adipisicing elit.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <!-- Card 3 -->
                                <div class="card">
                                    <div
                                        class="card-header"
                                        id="accordion-tab-1-heading-3"
                                    >
                                        <h5 class="accordion-header">
                                            <button
                                                class="btn btn-link accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#accordion-tab-1-content-3"
                                                aria-expanded="false"
                                                aria-controls="accordion-tab-1-content-3"
                                            >
                                                Lorem ipsum dolor sit, amet
                                                consectetur adipisicing elit?
                                            </button>
                                        </h5>
                                    </div>
                                    <div
                                        class="collapse accordion-collapse"
                                        id="accordion-tab-1-content-3"
                                        aria-labelledby="accordion-tab-1-heading-3"
                                        data-bs-parent="#accordion-tab-1"
                                    >
                                        <div class="card-body">
                                            <p>
                                                Lorem ipsum dolor sit, amet
                                                consectetur adipisicing elit.
                                                Nesciunt ea eveniet, aliquid
                                                inventore dolore sit perferendis
                                                suscipit amet in! Debitis omnis
                                                assumenda corrupti aut
                                                accusantium sapiente illo
                                                quisquam natus at?
                                            </p>
                                            <p>
                                                <strong>Example: </strong>Lorem
                                                ipsum dolor sit, amet
                                                consectetur adipisicing elit.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Tab 2 -->
                        <div class="tab-pane fade" id="tab2" role="tabpanel">
                            <div class="accordion" id="accordion-tab-2">
                                <!-- Card 1 -->
                                <div class="card">
                                    <div
                                        class="card-header"
                                        id="accordion-tab-2-heading-1"
                                    >
                                        <h5 class="accordion-header">
                                            <button
                                                class="btn btn-link accordion-button"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#accordion-tab-2-content-1"
                                                aria-expanded="true"
                                                aria-controls="accordion-tab-2-content-1"
                                            >
                                                Lorem ipsum dolor sit, amet
                                                consectetur adipisicing elit?
                                            </button>
                                        </h5>
                                    </div>
                                    <div
                                        class="collapse show accordion-collapse"
                                        id="accordion-tab-2-content-1"
                                        aria-labelledby="accordion-tab-2-heading-1"
                                        data-bs-parent="#accordion-tab-2"
                                    >
                                        <div class="card-body">
                                            <p>
                                                Lorem ipsum dolor sit, amet
                                                consectetur adipisicing elit.
                                                Nesciunt ea eveniet, aliquid
                                                inventore dolore sit perferendis
                                                suscipit amet in! Debitis omnis
                                                assumenda corrupti aut
                                                accusantium sapiente illo
                                                quisquam natus at?
                                            </p>
                                            <p>
                                                <strong>Example: </strong>Lorem
                                                ipsum dolor sit, amet
                                                consectetur adipisicing elit.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <!-- Card 2 -->
                                <div class="card">
                                    <div
                                        class="card-header"
                                        id="accordion-tab-2-heading-2"
                                    >
                                        <h5 class="accordion-header">
                                            <button
                                                class="btn btn-link accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#accordion-tab-2-content-2"
                                                aria-expanded="false"
                                                aria-controls="accordion-tab-2-content-2"
                                            >
                                                Lorem ipsum dolor sit, amet
                                                consectetur adipisicing elit?
                                            </button>
                                        </h5>
                                    </div>
                                    <div
                                        class="collapse accordion-collapse"
                                        id="accordion-tab-2-content-2"
                                        aria-labelledby="accordion-tab-2-heading-2"
                                        data-bs-parent="#accordion-tab-2"
                                    >
                                        <div class="card-body">
                                            <p>
                                                Lorem ipsum dolor sit, amet
                                                consectetur adipisicing elit.
                                                Nesciunt ea eveniet, aliquid
                                                inventore dolore sit perferendis
                                                suscipit amet in! Debitis omnis
                                                assumenda corrupti aut
                                                accusantium sapiente illo
                                                quisquam natus at?
                                            </p>
                                            <p>
                                                <strong>Example: </strong>Lorem
                                                ipsum dolor sit, amet
                                                consectetur adipisicing elit.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <!-- Card 3 -->
                                <div class="card">
                                    <div
                                        class="card-header"
                                        id="accordion-tab-2-heading-3"
                                    >
                                        <h5 class="accordion-header">
                                            <button
                                                class="btn btn-link accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#accordion-tab-2-content-3"
                                                aria-expanded="false"
                                                aria-controls="accordion-tab-2-content-3"
                                            >
                                                Lorem ipsum dolor sit, amet
                                                consectetur adipisicing elit?
                                            </button>
                                        </h5>
                                    </div>
                                    <div
                                        class="collapse accordion-collapse"
                                        id="accordion-tab-2-content-3"
                                        aria-labelledby="accordion-tab-2-heading-3"
                                        data-bs-parent="#accordion-tab-2"
                                    >
                                        <div class="card-body">
                                            <p>
                                                Lorem ipsum dolor sit, amet
                                                consectetur adipisicing elit.
                                                Nesciunt ea eveniet, aliquid
                                                inventore dolore sit perferendis
                                                suscipit amet in! Debitis omnis
                                                assumenda corrupti aut
                                                accusantium sapiente illo
                                                quisquam natus at?
                                            </p>
                                            <p>
                                                <strong>Example: </strong>Lorem
                                                ipsum dolor sit, amet
                                                consectetur adipisicing elit.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Tab 3 -->
                        <div class="tab-pane fade" id="tab3" role="tabpanel">
                            <div class="accordion" id="accordion-tab-3">
                                <div class="card">
                                    <div
                                        class="card-header"
                                        id="accordion-tab-3-heading-1"
                                    >
                                        <h5 class="accordion-header">
                                            <button
                                                class="btn btn-link accordion-button"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#accordion-tab-3-content-1"
                                                aria-expanded="true"
                                                aria-controls="accordion-tab-3-content-1"
                                            >
                                                Lorem ipsum dolor sit, amet
                                                consectetur adipisicing elit?
                                            </button>
                                        </h5>
                                    </div>
                                    <div
                                        class="collapse show accordion-collapse"
                                        id="accordion-tab-3-content-1"
                                        aria-labelledby="accordion-tab-3-heading-1"
                                        data-bs-parent="#accordion-tab-3"
                                    >
                                        <div class="card-body">
                                            <p>
                                                Lorem ipsum dolor sit, amet
                                                consectetur adipisicing elit.
                                                Nesciunt ea eveniet, aliquid
                                                inventore dolore sit perferendis
                                                suscipit amet in! Debitis omnis
                                                assumenda corrupti aut
                                                accusantium sapiente illo
                                                quisquam natus at?
                                            </p>
                                            <p>
                                                <strong>Example: </strong>Lorem
                                                ipsum dolor sit, amet
                                                consectetur adipisicing elit.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="card">
                                    <div
                                        class="card-header"
                                        id="accordion-tab-3-heading-2"
                                    >
                                        <h5 class="accordion-header">
                                            <button
                                                class="btn btn-link accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#accordion-tab-3-content-2"
                                                aria-expanded="false"
                                                aria-controls="accordion-tab-3-content-2"
                                            >
                                                Lorem ipsum dolor sit, amet
                                                consectetur adipisicing elit?
                                            </button>
                                        </h5>
                                    </div>
                                    <div
                                        class="collapse accordion-collapse"
                                        id="accordion-tab-3-content-2"
                                        aria-labelledby="accordion-tab-3-heading-2"
                                        data-bs-parent="#accordion-tab-3"
                                    >
                                        <div class="card-body">
                                            <p>
                                                Lorem ipsum dolor sit, amet
                                                consectetur adipisicing elit.
                                                Nesciunt ea eveniet, aliquid
                                                inventore dolore sit perferendis
                                                suscipit amet in! Debitis omnis
                                                assumenda corrupti aut
                                                accusantium sapiente illo
                                                quisquam natus at?
                                            </p>
                                            <p>
                                                <strong>Example: </strong>Lorem
                                                ipsum dolor sit, amet
                                                consectetur adipisicing elit.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="card">
                                    <div
                                        class="card-header"
                                        id="accordion-tab-3-heading-3"
                                    >
                                        <h5 class="accordion-header">
                                            <button
                                                class="btn btn-link accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#accordion-tab-3-content-3"
                                                aria-expanded="false"
                                                aria-controls="accordion-tab-3-content-3"
                                            >
                                                Lorem ipsum dolor sit, amet
                                                consectetur adipisicing elit?
                                            </button>
                                        </h5>
                                    </div>
                                    <div
                                        class="collapse accordion-collapse"
                                        id="accordion-tab-3-content-3"
                                        aria-labelledby="accordion-tab-3-heading-3"
                                        data-bs-parent="#accordion-tab-3"
                                    >
                                        <div class="card-body">
                                            <p>
                                                Lorem ipsum dolor sit, amet
                                                consectetur adipisicing elit.
                                                Nesciunt ea eveniet, aliquid
                                                inventore dolore sit perferendis
                                                suscipit amet in! Debitis omnis
                                                assumenda corrupti aut
                                                accusantium sapiente illo
                                                quisquam natus at?
                                            </p>
                                            <p>
                                                <strong>Example: </strong>Lorem
                                                ipsum dolor sit, amet
                                                consectetur adipisicing elit.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Tab 4 -->
                        <div class="tab-pane fade" id="tab4" role="tabpanel">
                            <div class="accordion" id="accordion-tab-4">
                                <div class="card">
                                    <div
                                        class="card-header"
                                        id="accordion-tab-4-heading-1"
                                    >
                                        <h5 class="accordion-header">
                                            <button
                                                class="btn btn-link accordion-button"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#accordion-tab-4-content-1"
                                                aria-expanded="true"
                                                aria-controls="accordion-tab-4-content-1"
                                            >
                                                Lorem ipsum dolor sit, amet
                                                consectetur adipisicing elit?
                                            </button>
                                        </h5>
                                    </div>
                                    <div
                                        class="collapse show accordion-collapse"
                                        id="accordion-tab-4-content-1"
                                        aria-labelledby="accordion-tab-4-heading-1"
                                        data-bs-parent="#accordion-tab-4"
                                    >
                                        <div class="card-body">
                                            <p>
                                                Lorem ipsum dolor sit, amet
                                                consectetur adipisicing elit.
                                                Nesciunt ea eveniet, aliquid
                                                inventore dolore sit perferendis
                                                suscipit amet in! Debitis omnis
                                                assumenda corrupti aut
                                                accusantium sapiente illo
                                                quisquam natus at?
                                            </p>
                                            <p>
                                                <strong>Example: </strong>Lorem
                                                ipsum dolor sit, amet
                                                consectetur adipisicing elit.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="card">
                                    <div
                                        class="card-header"
                                        id="accordion-tab-4-heading-2"
                                    >
                                        <h5 class="accordion-header">
                                            <button
                                                class="btn btn-link accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#accordion-tab-4-content-2"
                                                aria-expanded="false"
                                                aria-controls="accordion-tab-4-content-2"
                                            >
                                                Lorem ipsum dolor sit, amet
                                                consectetur adipisicing elit?
                                            </button>
                                        </h5>
                                    </div>
                                    <div
                                        class="collapse accordion-collapse"
                                        id="accordion-tab-4-content-2"
                                        aria-labelledby="accordion-tab-4-heading-2"
                                        data-bs-parent="#accordion-tab-4"
                                    >
                                        <div class="card-body">
                                            <p>
                                                Lorem ipsum dolor sit, amet
                                                consectetur adipisicing elit.
                                                Nesciunt ea eveniet, aliquid
                                                inventore dolore sit perferendis
                                                suscipit amet in! Debitis omnis
                                                assumenda corrupti aut
                                                accusantium sapiente illo
                                                quisquam natus at?
                                            </p>
                                            <p>
                                                <strong>Example: </strong>Lorem
                                                ipsum dolor sit, amet
                                                consectetur adipisicing elit.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="card">
                                    <div
                                        class="card-header"
                                        id="accordion-tab-4-heading-3"
                                    >
                                        <h5 class="accordion-header">
                                            <button
                                                class="btn btn-link accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#accordion-tab-4-content-3"
                                                aria-expanded="false"
                                                aria-controls="accordion-tab-4-content-3"
                                            >
                                                Lorem ipsum dolor sit, amet
                                                consectetur adipisicing elit?
                                            </button>
                                        </h5>
                                    </div>
                                    <div
                                        class="collapse accordion-collapse"
                                        id="accordion-tab-4-content-3"
                                        aria-labelledby="accordion-tab-4-heading-3"
                                        data-bs-parent="#accordion-tab-4"
                                    >
                                        <div class="card-body">
                                            <p>
                                                Lorem ipsum dolor sit, amet
                                                consectetur adipisicing elit.
                                                Nesciunt ea eveniet, aliquid
                                                inventore dolore sit perferendis
                                                suscipit amet in! Debitis omnis
                                                assumenda corrupti aut
                                                accusantium sapiente illo
                                                quisquam natus at?
                                            </p>
                                            <p>
                                                <strong>Example: </strong>Lorem
                                                ipsum dolor sit, amet
                                                consectetur adipisicing elit.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Tab 4 -->
                        <div class="tab-pane fade" id="tab5" role="tabpanel">
                            <div class="accordion" id="accordion-tab-5">
                                <div class="card">
                                    <div
                                        class="card-header"
                                        id="accordion-tab-5-heading-1"
                                    >
                                        <h5 class="accordion-header">
                                            <button
                                                class="btn btn-link accordion-button"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#accordion-tab-5-content-1"
                                                aria-expanded="true"
                                                aria-controls="accordion-tab-5-content-1"
                                            >
                                                Lorem ipsum dolor sit, amet
                                                consectetur adipisicing elit?
                                            </button>
                                        </h5>
                                    </div>
                                    <div
                                        class="collapse show accordion-collapse"
                                        id="accordion-tab-5-content-1"
                                        aria-labelledby="accordion-tab-5-heading-1"
                                        data-bs-parent="#accordion-tab-5"
                                    >
                                        <div class="card-body">
                                            <p>
                                                Lorem ipsum dolor sit, amet
                                                consectetur adipisicing elit.
                                                Nesciunt ea eveniet, aliquid
                                                inventore dolore sit perferendis
                                                suscipit amet in! Debitis omnis
                                                assumenda corrupti aut
                                                accusantium sapiente illo
                                                quisquam natus at?
                                            </p>
                                            <p>
                                                <strong>Example: </strong>Lorem
                                                ipsum dolor sit, amet
                                                consectetur adipisicing elit.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="card">
                                    <div
                                        class="card-header"
                                        id="accordion-tab-5-heading-2"
                                    >
                                        <h5 class="accordion-header">
                                            <button
                                                class="btn btn-link accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#accordion-tab-5-content-2"
                                                aria-expanded="false"
                                                aria-controls="accordion-tab-5-content-2"
                                            >
                                                Lorem ipsum dolor sit, amet
                                                consectetur adipisicing elit?
                                            </button>
                                        </h5>
                                    </div>
                                    <div
                                        class="collapse accordion-collapse"
                                        id="accordion-tab-5-content-2"
                                        aria-labelledby="accordion-tab-5-heading-2"
                                        data-bs-parent="#accordion-tab-5"
                                    >
                                        <div class="card-body">
                                            <p>
                                                Lorem ipsum dolor sit, amet
                                                consectetur adipisicing elit.
                                                Nesciunt ea eveniet, aliquid
                                                inventore dolore sit perferendis
                                                suscipit amet in! Debitis omnis
                                                assumenda corrupti aut
                                                accusantium sapiente illo
                                                quisquam natus at?
                                            </p>
                                            <p>
                                                <strong>Example: </strong>Lorem
                                                ipsum dolor sit, amet
                                                consectetur adipisicing elit.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="card">
                                    <div
                                        class="card-header"
                                        id="accordion-tab-5-heading-3"
                                    >
                                        <h5 class="accordion-header">
                                            <button
                                                class="btn btn-link accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#accordion-tab-5-content-3"
                                                aria-expanded="false"
                                                aria-controls="accordion-tab-5-content-3"
                                            >
                                                Lorem ipsum dolor sit, amet
                                                consectetur adipisicing elit?
                                            </button>
                                        </h5>
                                    </div>
                                    <div
                                        class="collapse accordion-collapse"
                                        id="accordion-tab-5-content-3"
                                        aria-labelledby="accordion-tab-5-heading-3"
                                        data-bs-parent="#accordion-tab-5"
                                    >
                                        <div class="card-body">
                                            <p>
                                                Lorem ipsum dolor sit, amet
                                                consectetur adipisicing elit.
                                                Nesciunt ea eveniet, aliquid
                                                inventore dolore sit perferendis
                                                suscipit amet in! Debitis omnis
                                                assumenda corrupti aut
                                                accusantium sapiente illo
                                                quisquam natus at?
                                            </p>
                                            <p>
                                                <strong>Example: </strong>Lorem
                                                ipsum dolor sit, amet
                                                consectetur adipisicing elit.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--  -->
    </div>
</template>
<script setup>
import headerFaq from "./Faq/headerFaq.vue";
</script>
<style lang="scss" scoped>
.faq-nav {
    flex-direction: column;
    margin: 0 0 32px;
    border-radius: 2px;
    border: 1px solid #ddd;
    box-shadow: 0 1px 5px rgba(85, 85, 85, 0.15);

    .nav-link {
        position: relative;
        display: block;
        margin: 0;
        padding: 13px 16px;
        background-color: #fff;
        border: 0;
        border-bottom: 1px solid #ddd;
        border-radius: 0;
        color: #616161;
        transition: background-color 0.2s ease;

        &:hover {
            background-color: #f6f6f6;
        }

        &.active {
            // background-color: #f6f6f6;
            // font-weight: 700;
            // color: rgba(0, 0, 0, 0.87);
            background-color: #081c3b;
            font-weight: 700;
            color: #fff;
        }

        &:last-of-type {
            border-bottom-left-radius: 2px;
            border-bottom-right-radius: 2px;
            border-bottom: 0;
        }

        i.mdi {
            margin-right: 5px;
            font-size: 18px;
            position: relative;
        }
    }
}

.tab-content {
    box-shadow: 0 1px 5px rgba(85, 85, 85, 0.15);

    .card {
        border-radius: 0;
    }

    .card-header {
        padding: 15px 16px;
        border-radius: 0;
        background-color: #f6f6f6;

        h5 {
            margin: 0;

            button {
                // display: block;
                width: 100%;
                padding: 0;
                border: 0;
                font-weight: 700;
                color: rgba(0, 0, 0, 0.87);
                text-align: left;
                white-space: normal;
                text-decoration: none;
                background-color: #f6f6f6;
                &:hover,
                &:focus,
                &:active,
                &:hover:active {
                    text-decoration: none;
                }
            }
        }
    }

    .card-body {
        p {
            color: #616161;

            &:last-of-type {
                margin: 0;
            }
        }
    }
}

.accordion {
    > .card {
        &:not(:first-child) {
            border-top: 0;
        }
    }
}

.collapse.show {
    .card-body {
        border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    }
}
</style>
