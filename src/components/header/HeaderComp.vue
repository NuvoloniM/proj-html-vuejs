<template>
    <div>
        <LogoComp/>
        <HeaderNavComp/>
        <SelectComp/>
        <SearchComp/>
    </div>
</template>

<script>

import LogoComp from '../header/partials/LogoComp.vue';
import HeaderNavComp from '../header/partials/HeaderNavComp.vue';
import SelectComp from '../header/partials/SelectComp.vue';
import SearchComp from '../header/partials/SearchComp.vue';

export default {
    name: 'HeaderComp',
    components: {
        LogoComp,
        HeaderNavComp,
        SelectComp,
        SearchComp,
    }
}
</script>

<style lang="scss" scoped>

</style>