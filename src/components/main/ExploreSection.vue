<template>
<div>
    <div class="container text-center py-5 my-4 w-75 mx-auto">
        <h6 class="pt-5">Let's Dream Big Together</h6>
        <h4 class="p-3 m-auto">Explore How can I help you</h4>
        <div class="row align-items-start py-2">
            <!-- passo i props al figlio e lo ciclo per la lunghezza dell'array -->
                <ExploreSectionCard
                v-for="(element,index) in services" 
                :key="index"
                :media="element.media"
                :title="element.title"
                :description="element.description"
                :link="element.link"
                :type='element.type'
                @typeView = "getActiveIndex"
            />
        </div>
        <div class="d-flex justify-content-center align-items-center">
            <div class="dot" :class="(this.currentIndex == 'A') ? 'active' : ''"></div>
            <div class="dot" :class="(this.currentIndex == 'B') ? 'active' : ''"></div>
            <div class="dot" :class="(this.currentIndex == 'C') ? 'active' : ''"></div>
        </div>
    </div>
</div>
    
</template>

<script>

import ExploreSectionCard from '../main/partials/ExploreSectionCard.vue'

export default {
    name: 'ExploreSection',
    components: {
        ExploreSectionCard,
    },
    data() {
        return {
            currentIndex: '',
            services: [
                {
                    media: require('../../assets/images/home-business-service-slide-01-480x298.jpg'),
                    title: 'Consultative Training',
                    description: 'With a coach addressing multiple issues that are off balance, affecting your business in various unconsidered ways.',
                    link: '#',
                    type: 'A',
                },
                {
                    media: require('../../assets/images/home-business-service-slide-02-480x298.jpg'),
                    title: 'Real Deal Coaching',
                    description: 'Brings an exceptionally powerful opportunity. Being able to accept, to worl with that opportunity',
                    link: '#',
                    type: 'A',
                },
                {
                    media: require('../../assets/images/home-business-service-slide-03-480x298.jpg'),
                    title: 'Advisor Training Program',
                    description: 'Getting high quality, entrepreneur mindset driven online business coaching, is what is needed',
                    link: '#',
                    type: 'A',
                },
                {
                    media: require('../../assets/images/home-business-service-slide-02-480x298.jpg'),
                    title: 'Real Deal Coaching',
                    description: 'Brings an exceptionally powerful opportunity. Being able to accept, to worl with that opportunity',
                    link: '#',
                    type: 'B',
                },
                {
                    media: require('../../assets/images/home-business-service-slide-03-480x298.jpg'),
                    title: 'Advisor Training Program',
                    description: 'Getting high quality, entrepreneur mindset driven online business coaching, is what is needed',
                    link: '#',
                    type: 'B',
                },
                {
                    media: require('../../assets/images/home-business-service-slide-01-480x298.jpg'),
                    title: 'Consultative Training',
                    description: 'With a coach addressing multiple issues that are off balance, affecting your business in various unconsidered ways.',
                    link: '#',
                    type: 'B',
                },
                {
                    media: require('../../assets/images/home-business-service-slide-03-480x298.jpg'),
                    title: 'Advisor Training Program',
                    description: 'Getting high quality, entrepreneur mindset driven online business coaching, is what is needed',
                    link: '#',
                    type: 'C',
                },
                {
                    media: require('../../assets/images/home-business-service-slide-01-480x298.jpg'),
                    title: 'Consultative Training',
                    description: 'With a coach addressing multiple issues that are off balance, affecting your business in various unconsidered ways.',
                    link: '#',
                    type: 'C',
                },
                {
                    media: require('../../assets/images/home-business-service-slide-02-480x298.jpg'),
                    title: 'Real Deal Coaching',
                    description: 'Brings an exceptionally powerful opportunity. Being able to accept, to worl with that opportunity',
                    link: '#',
                    type: 'C',
                },
                
            ]
        }
    },
    methods: {
        getActiveIndex: function(testo) {
            this.currentIndex = testo;
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