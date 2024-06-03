<script>
export default {
    name: 'AppInput'
}
</script>

<template>
    <div class="container">
        <div class="text-center">
            <input type="text">
            <select name="" id=""> select</select>
            <button>button1</button>
            <button>button2</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style.scss' as *;
@use '../assets/style/common' as*;
@use '../assets/style/variables' as*;

.container {
    @include container;
    padding: $py_2;

    .text-center {
        text-align: $text-center
    }
}
</style>