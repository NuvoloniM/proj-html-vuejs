<template>
    <div class="col-5 d-flex align-items-center">
        <ul>
            <li v-for="(element,index) in navbarMenu" :key="index"> 
                <a :href="`${element.url}`">{{element.name}}</a>
                <font-awesome-icon icon="fa-solid fa-chevron-down" />
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HeaderNavComp',
    data() {
        return {
            navbarMenu: [
                {
                    name: 'Home',
                    url: '#',
                },
                {
                    name: 'Pages',
                    url: '#',
                },
                {
                    name: 'Courses',
                    url: '#',
                },
                {
                    name: 'Features',
                    url: '#',
                },
                {
                    name: 'Blog',
                    url: '#',
                },
                {
                    name: 'Shop',
                    url: '#',
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/style/mixin.scss';
div {
    padding: 0;
}
ul {
    @include orizontalMenu;
    margin-bottom: 0;

    li {
        @include d-flex( flex-start, center )
    }

    a{
        text-decoration: none;
        padding: 0px 15px;
    }
}


</style>