<template>
    <div class="col-4 d-flex pb-4">
        <div class="w-25">
            <img :src="`${media}`" alt="">
        </div>
        <div class="w-75 text-start pe-3">
            <h5> {{title}} </h5>
            <p> {{description}} </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StartedSectionCard',
    props: {
        media: String,
        title: String,
        description: String,
    }
}
</script>

<style lang="scss" scoped>

</style>