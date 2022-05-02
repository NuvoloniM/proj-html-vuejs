<template>
    <div class="container w-75 mx-auto">
        <div class="row justify-content-between py-5">
            <FooterAddress/>
            <FooterMenu/>
        </div>
        <div class="copyright"> &copy; 2020 maxcoach. All Rights Reserved </div>
    </div>
</template>

<script>

import FooterAddress from '../footer/partials/FooterAddress.vue';
import FooterMenu from '../footer/partials/FooterMenu.vue';

export default {
    name:  'FooterSection',  
    components: {
        FooterAddress,
        FooterMenu,
    } 
}
</script>

<style lang="scss" scoped>

@import '../../assets/style/variables.scss';

.copyright{
 font-size: 0.9em;
 color: $comment_text;
 text-align: center;
 padding-bottom: 40px;
}

</style>