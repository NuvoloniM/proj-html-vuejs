<template>
    <div class="col-6">
        <div class="video">
            <div class="play">
                <img src="../../../assets/images/icon-youtube-play.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PubblicitySectionVideo',
}
</script>

<style lang="scss" scoped>
@import '../../../assets/style/mixin.scss';

.video {
    background-image: url('../../../assets/images/home-business-video-poster-670x450.jpg');
    height: 400px;
    margin: 100px 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    position: relative;
    border-radius: 5px ;

    .play {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50% , -50%);
    }
}
</style>