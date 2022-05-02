<template>
    <div class="col-4">
        <h6> Address</h6>
        <p>382 NE 191st ST # 87394 Miami, FL 33179-3899</p>
        <p>+1(305)547-9909(9am - 5pm EST, Monday - Friday)</p>
        <p>Support@maxcoach.com</p>
        <ul>
            <li v-for="(element,index) in social" :key="index">
                <a :href="`${element.link}`"> 
                    <font-awesome-icon :icon="`fa-brands ${element.icon}`"/>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'FooterAddress',
    data() {
        return {
            social: [
                {
                    icon:'fa-facebook',
                    link:'www.facebook.com',
                },
                {
                    icon:'fa-twitter',
                    link:'www.twitter.com',
                },
                {
                    icon:'fa-instagram',
                    link:'www.instagram.com',
                },
                {
                    icon:'fa-linkedin',
                    link:'www.linkedin.com',
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/style/mixin.scss';

h6 {
    color: #fff;
}

p {
    font-size: 0.8em;
    font-style: italic;
    color: $comment_text;
}

ul {
    @include orizontalMenu;
    justify-content: flex-start;
    padding: 0;

    li {
        padding-right: 20px;

        a {
            text-decoration: none;
            font-size: 1.3em;
            color: $comment_text;
        }
    }
}

</style>