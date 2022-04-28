<template>
    <div>
        <ul v-for="(element,index) in navbarMenu" :key="index">
            <li> 
                <a :href="`${element.url}`">{{element.name}}</a>
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

</style>