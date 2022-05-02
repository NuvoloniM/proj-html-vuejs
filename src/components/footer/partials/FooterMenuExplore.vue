<template>
    <div class="col-6">
        <h6>Explore</h6>
        <div class="row">
            <div v-for="(element,index) in explore" :key="index" class="col-6">
                <a :href="`${element.link}`"> {{element.name}} </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FooterMenuExplore',
    data() {
        return {
            explore: [
                {
                    name: 'Start here',
                    link: '#',
                },
                {
                    name: 'Success story',
                    link: '#',
                },
                {
                    name: 'Blog',
                    link: '#',
                },
                {
                    name: 'Courses',
                    link: '#',
                },
                {
                    name: 'About us',
                    link: '#',
                },
                {
                    name: 'Contact us',
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

    &:hover {
        color: #fff;
    }
}

</style>