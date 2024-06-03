<script>

export default {
    name: 'AppHeader',
    data() {
        return {
            title: 'lorem'
        }
    }
}

</script>

<template>
    <header>
        <div class=" text-center py-2 ">
            <h1>{{ title }}</h1>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../style.scss' as *;
@use '../assets/style/common' as*;
@use '../assets/style/variables' as*;

header {
    background-color: orange;

    .py-2 {
        padding: $py_2;
    }

    .text-center {
        text-align: $text-center;
    }
}
</style>