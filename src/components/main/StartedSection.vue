<template>
    <div class="container text-center py-5 my-4 w-75 mx-auto">
        <h6>Let's Dream Big Together</h6>
        <h4 class="p-5 m-auto">We are pioneers of the digital approach, using leading-edge technology to simplify procedures and apply executive coaching in the new age of digitalization. </h4>
        <div class="row align-items-start py-2">
            <!-- passo i props al figlio e lo ciclo per la lunghezza dell'array -->
                <StartedSectionCard
                v-for="(element,index) in features" 
                :key="index"
                :media="element.media"
                :title="element.title"
                :description="element.description"
            />
        </div>
        <div class="my-4">
            <div class="d-inline-block btn btn_light me-5">
                <a href="#">Learn More</a>
            </div>
            <div class="d-inline-block btn btn_prymary">
                <a href="#">Get Started Today</a>
            </div>
        </div>
    </div>
</template>

<script>
// importo card singola a cui ho passato i props
import StartedSectionCard from '../main/partials/StartedSectionCard.vue';

export default {
    name: 'StartedSection',
    components: {
        StartedSectionCard,
    },
    data() {
        return {
            features: [
                {
                    media: require ('../../assets/images/en.png'),
                    title: 'One to One',
                    description: 'Getting the necessary clarity about the current state to help you improve your game',
                },
                {
                    media: require ('../../assets/images/en.png'),
                    title: 'Anywhere',
                    description: 'Getting the necessary clarity about the current state to help you improve your game',
                },
                {
                    media: require ('../../assets/images/en.png'),
                    title: 'On time',
                    description: 'Getting the necessary clarity about the current state to help you improve your game',
                },
                {
                    media: require ('../../assets/images/en.png'),
                    title: 'Online Courses',
                    description: 'Getting the necessary clarity about the current state to help you improve your game',
                },
                {
                    media: require ('../../assets/images/en.png'),
                    title: 'Consulting',
                    description: 'Getting the necessary clarity about the current state to help you improve your game',
                },
                {
                    media: require ('../../assets/images/en.png'),
                    title: 'Self Development',
                    description: 'Getting the necessary clarity about the current state to help you improve your game',
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
    
    .btn {
        width: 20%;
    }

    .btn_light {
        @include btn (#fff, $main_text, $section_bg) 
    }

    .btn_prymary {
        @include btn( $main_text , #fff , $main_text)
    }
</style>