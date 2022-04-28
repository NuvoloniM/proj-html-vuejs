<template>
    <div>
        <LogoComp/>
        <HeaderNavComp/>
        <SelectComp/>
    </div>
</template>

<script>

import LogoComp from '../header/partials/LogoComp.vue';
import HeaderNavComp from '../header/partials/HeaderNavComp.vue';
import SelectComp from '../header/partials/SelectComp.vue';

export default {
    name: 'HeaderComp',
    components: {
        LogoComp,
        HeaderNavComp,
        SelectComp,
    }
}
</script>

<style lang="scss" scoped>
// importo file mixin
@import '../../assets/style/mixin.scss';

div {
    // prendo dal file mixin un set creato con variabili e lo completo con quellop che mi serve
    @include d-flex( space-between, center);
    height: 80px;
}

</style>