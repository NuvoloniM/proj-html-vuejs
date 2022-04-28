<template>
    <div>
        <div>
            <!-- uso il valore dato dalla select (mi ritorna l'index dell'array) per mostrare la bandiera legata alla lingua -->
            <span> 
                <img :src="`${this.language[this.selected].flag}`" alt=""> 
            </span>
            <!-- inserisco il v-model per ottenere in data il valore selezionato (lo preimposto in 0 per non farlo risultare undefined) -->
            <select name="language" id="lang" v-model="selected">
                <!-- ciclo l'array di oggetti per ottenere indice e nome da inserire nel value e nella select -->
                <option v-for="(element,index) in language" :key="index" :value="`${index}`">  {{element.lang}} </option>
            </select>
            <!-- importo icona da fnt awesome dopo averlo installato tramite npm e aver creato libreria in main.js -->
            <span>
                <font-awesome-icon icon="fa-regular fa-circle-user" />
            </span>
        </div>
        <SearchComp/>
    </div>
</template>

<script>

import SearchComp from '../partials/SearchComp.vue'

export default {
    name: 'SelectComp',
    components: {
        SearchComp,
    },
    data(){
        return{
            language: [
                {
                    lang: 'english',
                    flag: require('../../../assets/images/en.png')
                },
                {
                    lang: 'deutch',
                    flag: require('../../../assets/images/de.png')
                },
                {
                    lang: 'french',
                    flag: require('../../../assets/images/fr.png')
                },
            ],
            selected: '0',
        }
    }
}
</script>

<style lang="scss" scoped>

</style>