<template>
    <div class="icon_menu">
        <ul>
            <li v-for="(element,index) in iconShortcut" :key="index">
                <a :href="`${element.url}`">
                    <img :src="`${element.icon}`" alt="">
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HeroIconMenu',
    data(){
        return {
            iconShortcut: [
                {
                    icon: require('../../../assets/images/icons8-set-square-64.png'),
                    url: '#'
                },
                {
                    icon: require('../../../assets/images/icons8-salvagente-30.png'),
                    url: '#'
                },
                {
                    icon: require('../../../assets/images/icons8-libro-50.png'),
                    url: '#'
                },
                {
                    icon: require('../../../assets/images/icons8-carrello-della-spesa-24.png'),
                    url: '#'
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

.icon_menu {
    position: absolute;
    right: 0;
    top: 30%;
}

ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 0;
    background-color: #fff;
    border-radius: 5px;

    li {
        padding: 5px 0;

        a {
            text-decoration: none;
            color: #797979;

            img {
                width: 20px;
            }
        }
    }

    
}

</style>