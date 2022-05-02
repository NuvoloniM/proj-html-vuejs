<template>
    <div class="hero">
        <div class="container">
            <div class="row">
                <div class="col-4 left_hero">
                    <h5> New Challenges, New Skills</h5>
                    <h3>Build your own life coaching business</h3>
                    <p>Whole-life Business Coaching for committed entrepreneurs</p>
                    <button class="btn">
                        <a href="#">Get started today</a>
                    </button>
                </div>
                <div class="col-8 right_hero">
                    <img class="img-fluid" src="../../assets/images/home-business-hero-avatar.png" alt="">
                </div>
            </div>
        </div>
        <HeroIconMenu/>
    </div>
</template>

<script>

import HeroIconMenu from '../main/partials/HeroIconMenu.vue';

export default {
    name: 'HeroComp',
    components: {
        HeroIconMenu,
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/mixin.scss";
    .hero{
        height: calc((80vh - 80px));
        background-color: $hero_bg;
        position: relative;

        .left_hero{
            @include d-flex(center, start);
            flex-direction: column;
            text-align: start;
            padding: 30px 50px 30px 0;

            h5{
                color: $main_text;
            }

            h3 {
                text-transform: uppercase;
            }

            p {
                font-size: 0.8em;
                color: $comment_text;
            }

            .btn {
                @include btn($main_text , #fff , $main_text);

                &:hover {
                    background-color: $nav_text;
                    border: 1px solid $nav_text;
                }
            }
        }

        .right_hero {
            @include d-flex(center,center);
            background-image: url('../../assets/images/home-business-hero-global-image.png');
            background-position: center;
            background-repeat: no-repeat ;
            background-size: contain;
            img {
                height: calc((80vh - 80px));
                padding-top: 20px;
            }
        }
    }
</style>