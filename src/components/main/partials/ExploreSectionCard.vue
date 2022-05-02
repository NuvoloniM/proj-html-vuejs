<template>
    <div class="col-4 d-flex pb-4">
        <div class="card">
            <img :src="`${media}`" class="card-img-top" alt="...">
            <div class="card-body p-0">
                <h5 class="card-title pt-4"> {{title}} </h5>
                <p class="card-text m-0"> {{description}} </p>
                <div class="link">
                    <a href="#" class="btn py-3">Discover now <span> <font-awesome-icon icon="fa-solid fa-arrow-right-long" /> </span></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ExploreSectionCard',
    props: {
        media: String,
        title: String,
        description: String,
        link: String,
    }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/style/mixin.scss';
    p {
        border-bottom: 1px solid $section_bg;
        padding: 10px 20px 20px;
        color: $comment_text;
        font-size: 0.8em;
    }

    .link:hover {
        background-color: $main_text;
        a {
            color: #fff;
        }
    }

    a {
        color: $main_text;

        span {
            padding: 0px 5px;
        }
    }
</style>