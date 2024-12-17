<template>
    <div class="divmarque">
        <div class="container divcont">
            <h1 class="notmarq">Notre marque a été citée sur</h1>
            <div class="division-grid">
                <div class="card">
                    <div class="peg">
                        <div class="flex-column-item">
                            <img
                                src="https://d12ittivwictyd.cloudfront.net/images/as-seen-on/telegraph-travel.jpg"
                                alt="As Seen On"
                                draggable="false"
                                class="img-fluid imfluid"
                                title="Telegraph travel"
                            />
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="peg">
                        <div class="flex-column-item text-center">
                            <img
                                src="https://d12ittivwictyd.cloudfront.net/images/as-seen-on/merian.png"
                                title="Merian"
                                draggable="false"
                                class="img-fluid"
                            />
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="peg">
                        <div class="flex-column-item text-center">
                            <img
                                src="https://d12ittivwictyd.cloudfront.net/images/as-seen-on/petit-fute.png"
                                alt="As Seen On"
                                title="Petit futé"
                                draggable="false"
                                class="img-fluid"
                            />
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="peg">
                        <div class="flex-column-item text-center">
                            <img
                                src="https://d12ittivwictyd.cloudfront.net/images/as-seen-on/gq-za.png"
                                draggable="false"
                                title="GQ South Africa"
                                class="img-fluid"
                            />
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="peg">
                        <div class="flex-column-item text-center">
                            <img
                                src="https://d12ittivwictyd.cloudfront.net/images/as-seen-on/trustpilot.png"
                                alt="As Seen On"
                                title="trustpilot"
                                draggable="false"
                                class="img-fluid"
                            />
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="peg">
                        <div class="flex-column-item text-center">
                            <img
                                src="https://d12ittivwictyd.cloudfront.net/images/as-seen-on/routard.png"
                                alt="As Seen On"
                                title="Routar"
                                draggable="false"
                                class="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup></script>
<style lang="scss" scoped>
.divmarque {
    background-color: #fff;
    margin-top: 80px;
    margin-bottom: 80px;
}
.divcont {
    // background-color: #74881c;
    padding: 0px 50px;
}
.notmarq {
    /* background-color: #74881c; */
    padding: 20px 0px;
    font-size: 20px;
    color: #716d6e;
}
.peg {
    display: flex;
    height: 100px;
    border-radius: 10px;
    opacity: 0.5;
    filter: grayscale(100%);
    // background-color: red;
    flex-wrap: wrap;
    align-content: center;
}
.peg:hover {
    opacity: 1;
    filter: none;
}

.peg img {
    width: 80%;
    //   height: 100px;
}
.imfluid {
    border-radius: 5px;
}
.division-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-auto-flow: row;
    gap: 20px;
}
.card {
    border: none;
}
</style>
