<template>
<div>
    <div class="container text-center py-5 my-4 ">
        <h6 class="pt-5">People are praising Maxcoach</h6>
        <h4 class="p-3 m-auto">What make they love us?</h4>
        <div class="row align-items-start py-2">
            <!-- passo i props al figlio e lo ciclo per la lunghezza dell'array -->
            <CommentSectionCard
            v-for="(element,index) in comments" :key="index"
            :comment='element'
            />
        </div>
        <div class="d-flex justify-content-center align-items-center py-4">
            <div class="dot active"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
        </div>
    </div>
</div>
    
</template>

<script>

import CommentSectionCard from './partials/CommentSectionCard.vue';

export default {
    name: 'CommentSection',
    components: {
        CommentSectionCard,
    },
    data() {
        return {
            comments: [
                {
                    title: "It's a choice of quality for people with special needs",
                    comment: "I'm a very strict person so I require everything to be organized and neat. then, I'll be able to make things right and shine. MaxCoach guys just got me.",
                    media: require('../../assets/images/testimonial-avata-03.jpg'),
                    name: "Florence Themes",
                    profession: "Multimedia Admin",
                    active: 'false',
                },
                {
                    title: "High level of efficiety and scientific teaching methods",
                    comment: "I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.",
                    media: require('../../assets/images/testimonial-avata-02.jpg'),
                    name: "Mina Hollace",
                    profession: "Freelancer",
                    active: 'true',
                },
                {
                    title: "It's a choice of quality for people with special needs",
                    comment: "I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great stydy portal for people like me.",
                    media: require('../../assets/images/testimonial-avata-04.jpg'),
                    name: "Madley Pondor",
                    profession: "IT Specialist",
                    active: 'false',
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/mixin.scss';
div {
    background-color: $section_bg;

    h6 {
        color: $main_text;
    }
    .dot {
        height: 8px;
        width: 8px;
        margin: 0px 5px;
        background-color: $dot_section;
        border-radius: 50%;
        display: inline-block;
    }

    .active {
        height: 15px;
        width: 15px;
        background-color: #000;
    }
}
</style>