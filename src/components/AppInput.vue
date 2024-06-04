<script>
export default {
    name: 'AppInput'
}
</script>

<template>
    <div class="container">
        <div class="text-center">
            <input type="text">
            <select name="" id="" class="mx-1">
                <option value="item 1"> item 1 </option>
                <option value="item 2">item 2</option>
            </select>
            <button class="button bg-blue ">Search</button>
            <button class="button bg-orange">Reset</button>
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

    .bg-blue {
        background-color: blue;
        color: white
    }

    .bg-orange {
        background-color: orange;
    }

    .mx-1 {
        margin: 0 1rem;
    }
}
</style>