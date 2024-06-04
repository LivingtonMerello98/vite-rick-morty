<script>
import { store } from '../store'
export default {
    name: 'AppFooter',
    data() {
        return {
            store
        }
    }

}
</script>
<template>
    <footer>
        <div class="container">
            <div class="text-center">
                <span> found {{ store.result.length }} characters</span>
            </div>
        </div>
    </footer>
</template>
<style lang="scss" scoped>
@use '../style.scss' as *;
@use '../assets/style/common' as*;
@use '../assets/style/variables' as*;


footer {
    padding: $py_2;

    .container {
        @include container;

        .text-center {
            text-align: $text-center;
        }
    }
}
</style>