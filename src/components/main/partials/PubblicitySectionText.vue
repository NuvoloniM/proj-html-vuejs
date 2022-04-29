<template>
    <div class="col-6 my-5 px-5">
        <h2 class="mb-5 text-white">To Thrive In Business Today, You'll Need a Good plan</h2>
        <PubblicitySectionQuestions
        v-for="(element,index) in questions" :key="index"
        :title="element.title"
        :text1="element.text1"
        :text2="element.text2"
        />
    </div>
</template>

<script>

import PubblicitySectionQuestions from '../partials/PubblicitySectionQuestions.vue';

export default {
    name: 'PubblicitySectiontext',
    components:{
        PubblicitySectionQuestions,
    },
    data() {
        return {
            questions: [
                {
                    title: "How can we help?",
                    text1: "How many courses you've been on, using however many techniques and methods. Unless you've come to realize the value of mindset, then you've yet understand how success comes.",
                    text2:"With everyone else's mindset involved impacting too. Hence why business coaching is so crucial for success.",
                },
                {
                    title: "Why would I need a business COACH?",
                    text1: "How many courses you've been on, using however many techniques and methods. Unless you've come to realize the value of mindset, then you've yet understand how success comes.",
                    text2:"With everyone else's mindset involved impacting too. Hence why business coaching is so crucial for success.",
                },
                {
                    title: "What is one-on-one coaching?",
                    text1: "How many courses you've been on, using however many techniques and methods. Unless you've come to realize the value of mindset, then you've yet understand how success comes.",
                    text2:"With everyone else's mindset involved impacting too. Hence why business coaching is so crucial for success.",
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

</style>