<script>

export default {
    name: 'AppHeader',
    data() {
        return {
            title: 'Rick e Morty App'
        }
    }
}

</script>

<template>
    <header>
        <div class=" text-center py-2 ">
            <h1 class="title">{{ title }}</h1>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../style.scss' as *;
@use '../assets/style/common' as*;
@use '../assets/style/variables' as*;

header {

    .py-2 {
        padding: $py_2;
    }

    .text-center {
        text-align: $text-center;
    }

    .title {
        font-size: 3rem;
    }
}
</style>