<template>
    <div class="col-3 photo_bg" :style="{ 'background-image':  `url(${media})`}">
        <div class="filter"></div>
        <div class="photo_text text-start p-4">
            <h5>{{price}}</h5>
            <h4>
                <a :href="`${link}`">{{title}}</a> 
            </h4>
            <div class="hide_text">
                <div class="d-flex">
                    <div class="me-3">
                        <span>
                            <font-awesome-icon icon="fa-regular fa-file-lines" />
                            {{lessons}} Lessons
                        </span>
                    </div>
                    <div>
                        <span>
                            <font-awesome-icon icon="fa-regular fa-user" />
                            {{students}} Students
                        </span>
                    </div>
                </div>
                <div class="py-3">
                    {{description}}
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
   name: 'HelpSectionCard',
   props: {
       media: String,
       title: String,
       price: String,
       link: String,
       description: String,
       lessons: Number,
       students: Number,
   }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/style/mixin.scss';
    .photo_bg {
        height: 100%;
        flex-basis: calc((100% / 4) - 20px);
        margin: 0px 10px;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        border-radius: 5px;
        padding: 0;

        .filter {
            @include black_filter;
        }

        .photo_text {
            position: absolute;
            bottom: 0;
            left: 0;

            h5 {
                color: $main_text;
                font-weight: bold;
            }
            a{
                color: #fff;
                text-decoration: none;
            }

            .hide_text{
                color: #fff;
                font-size: 0.8em;
                display: none;
            }

            &:hover {

                .hide_text{
                    display: block;
                }
            }
        }
    }

</style>