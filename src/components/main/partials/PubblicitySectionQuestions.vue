<template>
    <div class="d-flex text-white align-items-star my-3 effect">
        <div class="col-1">
            <font-awesome-icon icon="fa-regular fa-circle-play" class="icon_down" />
        </div>
        <div class="col-11 mb-3">
            <h4> {{title}}</h4>
            <p>
                {{text1}}
                <br>
                <br>
                {{text2}}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PubblicitySectionQuestions',
    props: {
        title: String,
        text1: String,
        text2: String,
    }    
}
</script>

<style lang="scss" scoped>
@import '../../../assets/style/variables.scss';
    .icon_down {
        transform: rotate(90deg);
        font-size: 1.2em;
        transition: transform 1s;
    }

    h4 {
        padding-bottom: 30px;
        border-bottom: 1px solid #fff;
    }

    p {
        display: none;
        padding-bottom: 30px;
        border-bottom: 1px solid #fff;

    }

    .effect:hover {

        p{
            display: block;
            cursor: pointer;
        }

        h4 {
            color: $main_text;
        }

        .icon_down{
            transform: rotate(-90deg);
        }
    }

</style>