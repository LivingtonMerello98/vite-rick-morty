<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue';
import AppInput from './components/AppInput.vue';

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    AppInput
  }
}
</script>

<template>
  <AppHeader />
  <AppInput />
  <AppMain />
  <AppFooter />
</template>


<style></style>