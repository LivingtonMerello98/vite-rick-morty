<script>
export default {
    name: 'AppCard'
}
</script>

<template>
    <div class="row">
        <div class="col-33">
            <div class="card">

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style.scss' as *;
@use '../assets/style/common' as*;
@use '../assets/style/variables' as*;

.row {
    @include row;

    .col-33 {
        @include col-33;
    }
}
</style>