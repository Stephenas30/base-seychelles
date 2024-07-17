<template>
    <div>
        <div class="container cont-form-head">
            <div class="div-form">
                <h1 class="tit-form">Search Vehicle Inventory</h1>
                <form action="" class="form-head-search">
                    <div class="row">
                        <div class="col-lg-3 mt-2">
                            <input type="text" placeholder="Name" />
                        </div>
                        <div class="col-lg-3 mt-2">
                            <input type="text" placeholder="Name" />
                        </div>
                        <div class="col-lg-3 mt-2">
                            <input type="text" placeholder="Name" />
                        </div>
                        <div class="col-lg-3 mt-2">
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
    margin-bottom: 20px;
    font-size: 35px;
    font-weight: bold;
}
.form-head-search input,
.form-head-search button {
    width: 100%;
    height: 50px;
    border: none;
    outline: none;
    padding-left: 20px;
    border: 1px solid rgb(94, 91, 91);
}
.cont-form-head {
    margin-top: -100px;
    padding: 35px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 100;
}
button{
    padding: 10px 40px;
    border: none;
    font-weight: bold;
    background-color: #bd162d;
    color: #fff;
}
</style>
