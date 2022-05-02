<template>
    <div class="comment_card col-4 p-2 text-start rounded border border-light" :class="(comment.active == 'true')? 'seen' : 'no_seen'">
        <h6> {{comment.title}} </h6>
        <p> {{comment.comment}} </p>
        <div class="d-flex">
            <div class="col-2 p-1 me-3">
                <img :src="`${comment.media}`" alt="" class="rounded-circle img-fluid">
            </div>
            <div class="col-10">
                <h6 class="text-uppercase"> {{comment.name}} </h6>
                <div class="profession"> {{comment.profession}} </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CommentSectionCard',
    props: {
        comment: Object
    }
}
</script>

<style lang="scss" scoped>

@import '../../../assets/style/variables.scss';

h6 {
    color: $comment_title;
;
}

.comment_card{
    flex-basis: calc((100% / 3) - 20px);
    margin: 0px 10px;
}

.seen{
    background-color: #fff;
}

.no_seen{
    background-color: $section_bg;
    filter: opacity(30%);
}

.profession {
    font-size: 0.7em;
    color: $comment_text;
}

</style>