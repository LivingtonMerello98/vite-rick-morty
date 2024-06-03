<script>
export default {
    name: 'AppFooter'
}
</script>
<template>
    <footer>
        <div class="container">
            <div class="text-center">
                <span> placeholder</span>
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
    background-color: orange;

    .container {
        @include container;

        .text-center {
            text-align: $text-center;
        }
    }
}
</style>