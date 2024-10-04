<template>
    <div>
        <div class="container cont-form-head">
            <div class="div-form">
                <h1 class="tit-form">Search Vehicle Inventory</h1>
                <form action="" class="form-head-search">
                    <div class="row">
                        <div class="col-lg-2 mt-2">
                            <label>LIEU DE DÉPART</label>
                            <select
                                class="select"
                                aria-label=".form-select-lg example"
                            >
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div class="col-lg-2 mt-2">
                            <label>LIEU DE RETOUR</label>
                            <select
                                class="select"
                                aria-label=".form-select-lg example"
                            >
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div class="col-lg-3 mt-2">
                            <label>DATE ET HEURE DE DÉPART</label>
                            <input type="datetime-local" placeholder="Name" />
                        </div>
                        <div class="col-lg-3 mt-2">
                            <label>DATE ET HEURE DE RETOUR</label>
                            <input type="datetime-local" placeholder="Name" />
                        </div>
                        <div class="col-lg-2 mt-2">
                            <label class="lab-sear">search</label>
                            <button>SEARCH</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<style scoped>
.tit-form {
    text-align: center;
    color: #333;
    /* margin-bottom: 20px; */
    font-size: 35px;
    font-weight: bold;
}
.form-head-search select,
.form-head-search input,
.form-head-search button {
    width: 100%;
    height: 50px;
    border: none;
    outline: none;
    padding:0 10px;
    border: 1px solid rgb(94, 91, 91);
}
.form-head-search select,
.form-head-search input{
    color: #333;
}
.cont-form-head {
    margin-top: -100px;
    padding: 35px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 100;
}
label{
    min-width: 50px;
    min-height: 20px;
    /* background-color: red; */
    font-size: 12px;
    color: rgba(51, 51, 51, 0.632);
}
.lab-sear{
    color: transparent;
}
button {
    margin: 0;
    padding: 10px 40px;
    border: none;
    font-weight: bold;
    background-color: #bd162d;
    color: #fff;
}
@media (max-width: 991px) {
    .cont-form-head {
    margin-top: -120px;
}
}
</style>
