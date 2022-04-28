<template>
    <div class="d-flex justify-content-between align-items-center p-0">
        <input type="text" placeholder="Search...">
        <span>
            <button class="btn btn-light">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            </button>
        </span>
    </div>
</template>

<script>

import 'bootstrap';

export default {
    name: 'SearchComp',
}
</script>

<style lang="scss" scoped>
@import "bootstrap/dist/css/bootstrap.min.css";

</style>