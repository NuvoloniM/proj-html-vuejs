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
                />
        </div>
        <p> Take the control of their life back and start doing things to make their dream come true. <span><a href="#">View all courses <font-awesome-icon icon="fa-solid fa-arrow-right-long" /></a></span></p>
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
                    link: '#',
                },
                {
                    media: require('../../assets/images/stock-full-hd-03-443x600.jpg'),
                    title: 'Cuastomer-centric Info-Tech Strategies',
                    price: 'Free',
                    link: '#',
                },
                {
                    media: require('../../assets/images/stock-full-hd-04-443x600.jpg'),
                    title: 'Open Programming Courses for Everyone: Python',
                    price: '$19.00',
                    link: '#',
                },
                {
                    media: require('../../assets/images/stock-full-hd-06-443x600.jpg'),
                    title: 'Academic Listening and Note-taking',
                    price: '$26.00',
                    link: '#',
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
</style>