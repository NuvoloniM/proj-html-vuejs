<template>
    <nav class="navbar navbar-expand-lg justify-content-between">
        <a class="navbar-brand" href="#">
            <img src="../../assets/images/dark-logo.png" alt="" class="w-50">
        </a>
        <button class="navbar-toggler mx-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0 me-auto">
            <li v-for="(element,index) in navbarMenu" :key="index" class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" :href="`${element.url}`" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {{element.name}}
            </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li v-for="(subelement,index) in element.sublink " :key="index"><a class="dropdown-item" :href="`${subelement.url}`"> {{subelement.name}} </a></li>
                </ul>
            </li>
        </ul>
        <SelectComp/>
        </div>
    </nav>
</template>

<script>

import SelectComp from '../header/partials/SelectComp.vue'

export default {
    name: 'HeaderNav',
    components: {
        SelectComp,
    },
    data() {
        return {
            navbarMenu: [
                {
                    name: 'Home',
                    url: '#',
                    sublink: [
                        {
                            name:'Action',
                            url: '#',
                        },
                        {
                            name:'Another action',
                            url: '#',
                        },
                        {
                            name:'Something else here',
                            url: '#',
                        },
                    ]
                },
                {
                    name: 'Pages',
                    url: '#',
                    sublink: [
                        {
                            name:'Action',
                            url: '#',
                        },
                    ]
                },
                {
                    name: 'Courses',
                    url: '#',
                    sublink: [
                        {
                            name:'Action',
                            url: '#',
                        },
                        {
                            name:'Another action',
                            url: '#',
                        },
                    ]
                },
                {
                    name: 'Features',
                    url: '#',
                    sublink: [
                        {
                            name:'Action',
                            url: '#',
                        },
                        {
                            name:'Another action',
                            url: '#',
                        },
                    ]
                },
                {
                    name: 'Blog',
                    url: '#',
                    sublink: [
                        {
                            name:'Action',
                            url: '#',
                        },
                        {
                            name:'Another action',
                            url: '#',
                        },
                        {
                            name:'Something else here',
                            url: '#',
                        },
                    ]
                },
                {
                    name: 'Shop',
                    url: '#',
                    sublink: [
                        {
                            name:'Action',
                            url: '#',
                        },
                        
                    ]
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

@import '../../assets/style/variables.scss';

.navbar-brand {
    margin-left: 10%;
}

ul li a {
    color: $nav-text;
}


</style>