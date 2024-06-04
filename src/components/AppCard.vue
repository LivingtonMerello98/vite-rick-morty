<script>
import { store } from '../store'
export default {
    name: 'AppCard',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="row">
        <div class="col-25" v-for="(result, index) in store.result" :key="index">
            <div class="card text-center d-flex flex-column align-items-center">
                <img :src="result.image" :alt="result.name" class="card-img-top border-radius">
                <div class="card-body">
                    <h4 class="card-title">{{ result.name }}</h4>
                    <p class="card-text">{{ result.status }}</p>
                    <p class="card-text">{{ result.species }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style.scss' as *;
@use '../assets/style/common' as *;
@use '../assets/style/variables' as *;

.row {
    @include row;

    .col-25 {
        @include col-25;
    }

    .text-center {
        text-align: center;
    }

    .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    .border-radius {
        border-radius: 100%;
        max-width: 70%;
        min-width: 20px;
        margin: 2rem 2rem;
    }

    img {
        box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.248);
    }

}
</style>
