<template>
    <div class="col-6">
        <div class="row">
            <FooterMenuExplore/>
            <FooterMenuInformation/>
        </div>
    </div>
</template>

<script>

import FooterMenuExplore from '../partials/FooterMenuExplore.vue';
import FooterMenuInformation from '../partials/FooterMenuInformation.vue';

export default {
    name: 'FooterMenu',
    components: {
        FooterMenuExplore,
        FooterMenuInformation,
    }
}
</script>

<style lang="scss" scoped>

</style>