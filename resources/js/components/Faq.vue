<template>
    <div>
        <headerFaq />
        <div class="container">
            <div class="mt-5">
                <div class="row">
                    <div class="col-lg-4 card">
                        <ul>
                            <li>sit amet consectetur</li>
                            <li>Aliquam qui provident</li>
                            <li>ipsa mollitia iste</li>
                            <li>dolorem dignissimos animi</li>
                        </ul>
                    </div>
                    <div class="col-lg-8 card mt-2">
                        <div
                            v-for="(item, index) in faq"
                            :key="index"
                            class="div-collapse"
                        >
                            <p class="param-collapse">
                                <a
                                    class="btn w-100 text-start"
                                    :data-bs-toggle="'collapse'"
                                    :href="'#collapseExample' + index"
                                    role="button"
                                    aria-expanded="true"
                                    :aria-controls="'collapseExample' + index"
                                >
                                    {{ item.question }}
                                </a>
                            </p>
                            <div
                                :class="['collapse', 'show']"
                                :id="'collapseExample' + index"
                            >
                                <div class="card card-body">
                                    {{ item.answer }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import headerFaq from "./Faq/headerFaq.vue";
const faq = [
    {
        question: "Link with href",
        answer: `Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.`,
    },
    {
        question: "Link with href",
        answer: `Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.`,
    },
    {
        question: "Link with href",
        answer: `Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.`,
    },
    {
        question: "Link with href",
        answer: `Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.`,
    },
];
</script>
<style scoped>
ul {
    background-color: #f5f5f5;
    padding: 15px;
}
li {
    list-style: none;
    background-color: #bd162d;
    color: #fff;
    /* margin: 8px 0; */
    margin-bottom: 12px;
    padding: 15px;
    font-weight: 700;
    border-radius: 8px;
}
.div-collapse {
    margin: 5px 0;
    /* background-color: #f5f5f5; */
    border-radius: 8px;
    border: 1px solid #ccc;
    background-color: #081c3b;
}
.param-collapse {
    margin: 5px 0;
    /* background-color: #fff; */
    font-weight: 700;
    /* border: 1px solid #ccc; */
    border-radius: 8px;
}
.param-collapse a {
    font-weight: 700;
    background-color: #081c3b;
    color: #fff;
}
.card {
    border: none;
}
.card-body {
    box-shadow: 0px 2px 5px #c9c9c9;
}
</style>
