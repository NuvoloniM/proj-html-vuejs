<template>
<div class="col-4 d-flex justify-content-between align-items-center p-0">
    <!-- uso il valore dato dalla select (mi ritorna l'index dell'array) per mostrare la bandiera legata alla lingua -->
    <span> 
        <img :src="`${this.language[this.selected].flag}`" alt=""> 
    </span>
     <!-- inserisco il v-model per ottenere in data il valore selezionato (lo preimposto in 0 per non farlo risultare undefined) -->
    <select class="form-select mx-2 text-uppercase w-50" aria-label="Default select example" v-model="selected">
        <!-- ciclo l'array di oggetti per ottenere indice e nome da inserire nel value e nella select -->
        <option v-for="(element,index) in language" :key="index" :value="`${index}`"> {{element.lang}} </option>
    </select>
    <!-- importo icona da fnt awesome dopo averlo installato tramite npm e aver creato libreria in main.js -->
    <span class="px-2 fs-3 user_icon">
        <font-awesome-icon icon="fa-regular fa-circle-user" />
    </span>
    <SearchComp/>
</div>
</template>

<script>

import 'bootstrap';
import SearchComp from '../partials/SearchComp.vue';

export default {
    name: 'SelectComp',
    components: {
        SearchComp,
    },
    data(){
        return{
            language: [
                {
                    lang: 'English',
                    flag: require('../../../assets/images/en.png')
                },
                {
                    lang: 'Deutch',
                    flag: require('../../../assets/images/de.png')
                },
                {
                    lang: 'French',
                    flag: require('../../../assets/images/fr.png')
                },
            ],
            selected: '0',
        }
    }
}
</script>

<style lang="scss" scoped>
@import "bootstrap/dist/css/bootstrap.min.css";

select {
    border: none;
}

.user_icon{
    border-left: 1px solid #eceeef;
}

</style>