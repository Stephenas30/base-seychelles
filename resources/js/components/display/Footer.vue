<template>
    <div class="div-foot-div">
        <div class="div-footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 text-center mt-2">Call (202) 1155-909</div>
                    <div class="col-lg-4 text-center mt-2">EVA CAR RENTAL</div>
                    <div class="col-lg-4 div-icn-cont mt-2">
                        <span><i class="bi bi-facebook"></i></span>
                        <span><i class="bi bi-instagram"></i></span>
                        <span><i class="bi bi-twitter"></i></span>
                    </div>
                </div>
            </div>
            <div class="container">
                <span class="spn"></span>
            </div>
            <div class="container division">
                <div><a href="#"><router-link class="nav-link" to="/"
                                >CAR RENTAL SEYCHELLES</router-link
                            ></a></div>
                <div><a href="#"><router-link class="nav-link" to="/about"
                                >CARS AND PRICES</router-link
                            ></a></div>
                <div><a href="#"><router-link class="nav-link" to="/faq"
                                >FAQ</router-link
                            ></a></div>
                <div><a href="#"><router-link class="nav-link" to="/notice"
                                >TERMS AND LEGAL NOTICE</router-link
                            ></a></div>
                <div><a href="#"><router-link class="nav-link" to="/contact"
                                >CONTACT US</router-link
                            ></a></div>
            </div>
            <div class="container">
                <span class="spn"></span>
            </div>
            <div class="container">
                <div>
                    <p class="param-eva">©2024 | Eva car rental</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup></script>
<style scoped>
.div-footer {
    /* background-image: url(); */
    background-image:  url(data:image/svg+xml;utf8,%3Csvg%20width%3D%221920%22%20height%3D%22954%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20clip-path%3D%22url%28%23prefix__clip0_75_23031%29%22%20fill%3D%22rgba%288%2C27%2C54%2C1%29%22%3E%3Cpath%20d%3D%22M1321.57%20538C1357.08%20287.516%201273.7%2089.91%201127-.418L1374.18-6c65.77%20100.68-15.89%20431.512-52.61%20544zM312%20955c432.242%200%20746.77-180.667%20850-271-90.34%20157.09-176.766%20246.121-208.688%20271H312z%22%20fill%3D%22rgba%2835%2C100%2C196%2C1%29%22%20fill-opacity%3D%22.25%22%2F%3E%3Cpath%20d%3D%22M1344.5%20427c0-252.4-212.67-390.833-319-428.5H1373c70%2082.4%2010.17%20320-28.5%20428.5z%22%20fill%3D%22rgba%2835%2C100%2C196%2C1%29%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M839.644%20954C1138.37%20793.549%201337%20508.902%201337%20184.5c0-63.218-7.54-124.926-21.9-184.5H1920v954H839.644zm0%200C676.842%201041.44%20484.311%201092%20278%201092c-584.87%200-1059-406.302-1059-907.5S-306.87-723%20278-723c511.098%200%20937.63%20310.269%201037.1%20723H0v954h839.644z%22%20fill%3D%22rgba%2835%2C100%2C196%2C1%29%22%20fill-opacity%3D%22.5%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M1011.55%20954C1221.42%20793.95%201353%20564.007%201353%20308.5c0-108.584-23.76-212.552-67.2-308.5H1920v954h-908.45zm0%200c-187.291%20142.83-436.933%20230-711.05%20230C-280.78%201184-752%20792.025-752%20308.5S-280.78-567%20300.5-567c450.743%200%20835.31%20235.692%20985.3%20567H0v954h1011.55z%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3CclipPath%20id%3D%22prefix__clip0_75_23031%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M0%200h1920v954H0z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3C%2Fsvg%3E);
    /* opacity: 0.5; */
    padding: 70px 0;
    display: flex;
    gap: 50px;
    flex-wrap: wrap;
}
.div-foot-div {
    background-color: #081c3b;
    color: #fff;
    margin-top: 80px;
}
.division {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
}
.spn {
    width: 100%;
    height: 3px;
    background-color: rgba(152, 149, 149, 0.564);
    display: block;
}
a {
    text-decoration: none;
    color: #fff;
}
.param-eva{
    text-align: center;
    color: rgba(152, 149, 149, 0.564);
}
.div-icn-cont{
    display: flex;
    gap: 20px;
    justify-content: center;
}
</style>
