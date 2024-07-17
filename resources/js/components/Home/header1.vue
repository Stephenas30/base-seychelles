<template>
    <div>
        <div class="div-header">
            <div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 p-0">
                            <div class="title-head">
                                <h1>Dreams Come True</h1>
                                <p>
                                    Buy Your Dream Car Today Starting From
                                    $2,000
                                </p>
                                <button>SEARCH CARS</button>
                            </div>
                        </div>
                        <div class="col-lg-6"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoop>
.div-header{
    background-image: url('../../../../public/image/car.jpg')!important;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    /* background-color: red; */
    width: 100%;
    min-height: 500px;
}
.title-head{
    background-color: rgba(11, 11, 11, 0.529);
    min-height: 300px;
    padding: 20px 30px;
    display: flex;
    margin: 30px 0;
    justify-content: flex-start;
    flex-wrap: wrap;
    color: #fff;
}
.title-head h1{
    text-transform: capitalize;
    font-size: 64px;
}
.title-head p{
    font-size: 32px;
}
button{
    padding: 10px 40px;
    border: none;
    font-weight: bold;
    background-color: #bd162d;
    color: #fff;
    /* margin-top: 30px; */
}
@media (max-width: 765px) {
    .title-head h1 {
        font-size: 35px;
    }
    .title-head p {
        font-size: 27px;
    }
}
</style>
