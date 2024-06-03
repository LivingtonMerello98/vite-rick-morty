<script>
import { store } from '../store'
export default {
    name: 'AppCard',
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="row">
        <div class="col-33" v-for="(result, index) in store.result">
            <div class="card">
                <img :src="result.image" alt="">
                <h4>{{ result.name }}</h4>
                <span>{{ result.status }}</span>
                <span>{{ result.species }}</span>
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