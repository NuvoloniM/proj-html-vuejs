<template>
    <div class="container py-5 w-75 mx-auto">
        <div class="row align-items-center ">
            <div class="col-4">
                <div class="rounded-circle ring"></div>
            </div>
            <div class="col-4 py-3">
                <div class="row text-center align-items-center">
                    <div class="col-12">
                        <h3>Subscribe <span> Newsletters </span></h3>
                        <p>Enter your email address to register to pur newsletter subscription delivered on a regular basis!</p>
                    </div>
                    <div class="input-group col-12 py-3">
                        <input type="text" class="form-control" placeholder="Enter your Email" aria-label="User Email" aria-describedby="button-addon2">
                        <button class="btn btn-outline-secondary" type="button" id="button-addon2">Subscribe</button>
                    </div>
                </div>
            </div>
            <div class="col-4 text-center bg_image h-100 d-flex align-items-end justify-content-center py-5">
                <img src="../../assets/images/maxcoach-shape-02.png" alt="" class="img-fluid w-25">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SubscribeSection',    
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/variables.scss';

.row {
    height: 30vh;
}

.ring {
    border: 5px solid #61e6d2;
    width: 40px;
    height: 40px;
}

.bg_image {
    background-image: url('../../assets/images/maxcoach-shape-09.png');
    background-size: auto;
    background-repeat: no-repeat;
    background-position:30% 30% ;
}

span {
    color: $main_text;
    font-weight: 100;
}

p {
    color: $comment_text;
}

input {
    background-color: $section_bg;
    color: $dot_section;
    font-size: 0.8em;
}

button {
    background-color: $main_text;
    color: #fff;
    font-size: 0.8em;
}

</style>