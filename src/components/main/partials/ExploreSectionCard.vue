<template>
    <div class="col-4 d-flex pb-4">
        <div class="card">
            <img :src="`${media}`" class="card-img-top" alt="...">
            <div class="card-body p-0">
                <h5 class="card-title pt-4"> {{title}} </h5>
                <p class="card-text"> {{description}} </p>
                <a href="#" class="btn">Discover now <span> <font-awesome-icon icon="fa-solid fa-arrow-right-long" /> </span></a>
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
    }
    a {
        color: $main_text;

        span {
            padding: 0px 5px;
        }
    }
</style>