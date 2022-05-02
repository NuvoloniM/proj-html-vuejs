<template>
<div>
    <div class="container text-center py-5 mt-4 mb-2 w-75 mx-auto">
        <h6 class="pt-5">Wanna transform your life?</h6>
        <h4 class="p-3 m-auto">Upcoming Events</h4>
        <div class="row align-items-start py-2">
            <!-- passo i props al figlio e lo ciclo per la lunghezza dell'array -->
            <EventSectionCard
            v-for="(element,index) in events" :key="index"
            :event='element'
            />
        </div>
            <p class="w-50 mx-auto py-3"> Excited about our event? <span class="link"><a href="#">View all events <font-awesome-icon icon="fa-solid fa-arrow-right-long" /></a></span></p>        
    </div>
    <div style="height: 150px; overflow: hidden;" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M-4.22,150.48 C149.83,137.65 428.04,123.83 508.74,-4.43 L500.00,150.00 L159.42,186.02 Z" style="stroke: none; fill: #eceeef;"></path></svg></div>
</div>
</template>

<script>

import EventSectionCard from './partials/EventSectionCard.vue'

export default {
    name: 'EventSection',
    components: {
        EventSectionCard,
    },
    data() {
        return {
            events: [
                {
                    localization: 'Texas, US',
                    title: 'Storytelling Workshop',
                    day: 22,
                    month: 'nov',
                    link: '#',
                },
                {
                    localization: 'New York, US',
                    title: 'Painting Art Contest 2020',
                    day: 10,
                    month: 'oct',
                    link: '#',
                },
                {
                    localization: 'Hamburg, Germany',
                    title: 'International Art Fair 2020',
                    day: 23,
                    month: 'nov',
                    link: '#',
                },
                {
                    localization: 'Ilinois, US',
                    title: 'Street Performance: Call for Artist',
                    day: 15,
                    month: 'dec',
                    link: '#',
                },
                {
                    localization: 'Ilinois, US',
                    title: 'Consumer Food Safety Education Conference',
                    day: 22,
                    month: 'jul',
                    link: '#',
                },
                {
                    localization: 'Dubai',
                    title: 'How meditation improve your mental health?',
                    day: 12,
                    month: 'aug',
                    link: '#',
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/mixin.scss';

    h6 {
        color: $main_text;
    }
    .link {
        a{
            color: $main_text;
            text-decoration: none;
            border-bottom: 1px solid $section_bg;
        }
}
</style>