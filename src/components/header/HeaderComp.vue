<template>
    <div class="row align-items-center justify-content-between">
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
div {
    height: 80px;
}

</style>