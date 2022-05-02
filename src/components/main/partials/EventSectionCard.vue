<template>
    <div class="col-6 p-3">
        <div class=" d-flex justify-content-between event_card">
            <div class="col-6 text-start">
                <div class="where">
                    <span class="pe-1">
                        <font-awesome-icon icon="fa-solid fa-location-dot" />
                    </span>
                    {{event.localization}}
                </div>
                <h6> {{event.title}} </h6>
            </div>
            <div class="col-4">
                <div class="day"> {{event.day}} </div>
                <div class="text-uppercase"> {{event.month}} </div>
                <div class="d-inline-block btn btn_prymary">
                    <a :href="`${event.link}`"> Get Ticket </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EventSectionCard',
    props: {
        event: Object,
    }
}
</script>

<style lang="scss" scoped>

@import '../../../assets/style/mixin.scss';

.event_card {
    background-color: #eceeef;
    padding: 20px;
}

.where {
    color: #bcbcbe;
    font-size: 0.7em;
}

.day {
    font-size: 1.5em;
    font-weight: bold;
    color: $main_text;
}

.btn_prymary {
        @include btn( $main_text , #fff , $main_text)
    }


</style>