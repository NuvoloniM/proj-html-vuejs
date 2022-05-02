<template>
    <div class="col-6">
        <h6>Information</h6>
        <div v-for="(element,index) in information" :key="index">
            <a :href="`${element.link}`">
                {{element.name}}
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FooterMenuInformation',
    data() {
        return{
            information: [
                {
                    name:'Membership',
                    link: '#',
                },
                {
                    name:'Purchase guide',
                    link: '#',
                },
                {
                    name:'Privacy policy',
                    link: '#',
                },
                {
                    name:'Terms of service',
                    link: '#',
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

@import '../../../assets/style/variables.scss';

h6 {
    color: #fff;
}

a {
    text-decoration: none;
    color: $comment_text;
    font-size: 0.8em;
}

</style>