<template>
<div class="section">
    <div class="decoration">
        <img src="../../assets/images/maxcoach-shape-07-150x150.png" alt="">
    </div>
    <div class="row container justify-content-center mx-auto">
        <PubblicitySectionVideo/>
        <PubblicitySectiontext/>
    </div>
</div>
</template>

<script>

import PubblicitySectionVideo from '../main/partials/PubblicySectionVideo.vue';
import PubblicitySectiontext from '../main/partials/PubblicitySectionText.vue';

export default {
    name: 'PubblicitySection',
    components: {
        PubblicitySectionVideo,
        PubblicitySectiontext,
    }
}
</script>

<style lang="scss" scoped>

@import '../../assets/style/mixin.scss';
.section {
    background-color: #323043;
    background-image: url('../../assets/images/background-map-dots-top-right-transparent.png');
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;
    position: relative;

    .decoration{
        position: absolute;
        bottom: 20px;
        left: 50px;
    }
}

</style>