<template>
<form class="d-flex">
    <input class="form-control me-2" type="search" placeholder="Search..." aria-label="Search">
    <button class="btn btn-light" type="submit">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
    </button>
</form>
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