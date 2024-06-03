<script>
import AppCard from './AppCard.vue';
export default {
    name: 'AppMain',
    components: {
        AppCard
    }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="row">
                <AppCard />
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../style.scss' as *;
@use '../assets/style/common' as*;
@use '../assets/style/variables' as*;


main {
    background-color: grey;
    padding: $py_2;

    .container {
        @include container;
    }
}
</style>