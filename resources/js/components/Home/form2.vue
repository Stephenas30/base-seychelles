<template>
    <div>
        <div class="container cont-form-head">
            <div class="div-form">
              <p class="tit-form">Fill out this form to find out about our car rental offers</p>
                <form action="" class="form-head-search">
                    <div class="row">
                        <div class="col-lg-2 mt-2">
                            <label>LIEU DE DÉPART</label>
                            <div class="divisionseardate">
                                <select
                                    class="select"
                                    aria-label=".form-select-lg example"
                                >
                                    <option selected>
                                        Open this select
                                    </option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <span class="spandate"
                                    ><i class="bi bi-caret-down-fill"></i
                                ></span>
                            </div>
                        </div>
                        <div class="col-lg-2 mt-2">
                            <label>LIEU DE RETOUR</label>
                            <div class="divisionseardate">
                                <select
                                    class="select"
                                    aria-label=".form-select-lg example"
                                >
                                    <option selected>
                                        Open this select
                                    </option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <span class="spandate"
                                    ><i class="bi bi-caret-down-fill"></i
                                ></span>
                            </div>
                        </div>
                        <div class="col-lg-3 mt-2">
                            <label>DATE ET HEURE DE DÉPART</label>
                            <div class="divisionseardate">
                                <input
                                    type="datetime-local"
                                    class="formcont"
                                    name="return_date"
                                />
                                <span class="spandate"
                                    ><i class="bi bi-clock"></i
                                ></span>
                            </div>
                        </div>
                        <div class="col-lg-3 mt-2">
                            <label>DATE ET HEURE DE RETOUR</label>
                            <div class="divisionseardate">
                                <input
                                    type="datetime-local"
                                    class="formcont"
                                    name="return_date"
                                />
                                <span class="spandate"
                                    ><i class="bi bi-clock"></i
                                ></span>
                            </div>
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
  /* text-align: center; */
  color: #333;
  /* margin-bottom: 20px; */
  font-size: 22px;
  font-weight: 500;
}
.form-head-search select,
.form-head-search input,
.form-head-search button {
    width: 100%;
    height: 50px;
    outline: none;
    padding: 0 10px;
    border: 1px solid rgb(94, 91, 91);
}
.form-head-search button {
    border: none;
}
.form-head-search select,
.form-head-search input {
    color: #333;
}
.cont-form-head {
    margin-top: -100px;
    padding: 35px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 100;
}
label {
    min-width: 50px;
    min-height: 20px;
    /* background-color: red; */
    font-size: 12px;
    color: rgba(51, 51, 51, 0.632);
}
.lab-sear {
    color: transparent;
}
button {
    margin: 0;
    padding: 10px 40px;
    border: none;
    font-weight: bold;
    background-color: #ffbf00;
    color: #fff;
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
    background-color: #ffbf00;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
}
.input {
    border-radius: 8px;
    height: 50px;
}
.formcont {
  /* border-radius: 8px; */
  height: 50px;
}
.formcont::-webkit-calendar-picker-indicator {
  position: absolute;
  z-index: 20;
  cursor: pointer;
  /* left: 15px; */
  /* font-size: 3rem; */
  opacity: 0;
  width: 100%;
}
@media (max-width: 991px) {
    .cont-form-head {
        margin-top: -120px;
    }
}
</style>
