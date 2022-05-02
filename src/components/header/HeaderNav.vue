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
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
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

@import '../../assets/style/variables.scss';

.navbar-brand {
    margin-left: 10%;
}

ul li a {
    color: $nav-text;
}


</style>