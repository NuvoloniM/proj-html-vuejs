<template>
<div class="section">
    <div class="container text-center py-5 my-4">
        <h6 class="pt-5">Let's Dream Big Together</h6>
        <h4 class="p-3 m-auto">Explore How can I help you</h4>
        <div class="row justify-content-between py-2">
            <!-- passo i props al figlio e lo ciclo per la lunghezza dell'array -->
                <HelpSectionCard
                v-for="(element,index) in packages" :key="index"
                :media="element.media"
                :title="element.title"
                :price="element.price"
                :link="element.link"
                :description="element.description"
                :lessons="element.lessons"
                :students="element.students"
                />
        </div>
        <p class="w-50 mx-auto py-5"> Take the control of their life back and start doing things to make their dream come true. <span class="link"><a href="#">View all courses <font-awesome-icon icon="fa-solid fa-arrow-right-long" /></a></span></p>
    </div>
</div>
    
</template>

<script>

import HelpSectionCard from '../main/partials/HelpSectionCard.vue'

export default {
    name: 'HelpSection',
    components: {
        HelpSectionCard,
    },
    data() {
        return {
            packages: [
                {
                    media: require('../../assets/images/course-02-443x600.jpg'),
                    title: 'Learning to Write as a Professional Author',
                    price: '$40.00',
                    description: "The purpose of this course is to provide the advanced writing techniques commonly used for inspiring readers and ...",
                    link: '#',
                    lessons: 20,
                    students: 50,
                },
                {
                    media: require('../../assets/images/stock-full-hd-03-443x600.jpg'),
                    title: 'Cuastomer-centric Info-Tech Strategies',
                    price: 'Free',
                    description: "The purpose of this course is to provide the advanced writing techniques commonly used for inspiring readers and ...",
                    link: '#',
                    lessons: 15,
                    students: 70,
                },
                {
                    media: require('../../assets/images/stock-full-hd-04-443x600.jpg'),
                    title: 'Open Programming Courses for Everyone: Python',
                    price: '$19.00',
                    description: "The purpose of this course is to provide the advanced writing techniques commonly used for inspiring readers and ...",
                    link: '#',
                    lessons: 30,
                    students: 80,
                },
                {
                    media: require('../../assets/images/stock-full-hd-06-443x600.jpg'),
                    title: 'Academic Listening and Note-taking',
                    price: '$26.00',
                    description: "The purpose of this course is to provide the advanced writing techniques commonly used for inspiring readers and ...",
                    link: '#',
                    lessons: 20,
                    students: 30,
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/mixin.scss';
.row {
    height: 50vh;
}
h6 {
    color: $main_text;
}

.link {
    a{
        color: $nav_text;
        text-decoration: none;
        border-bottom: 1px solid $section_bg;
    }
}

</style>