<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue';
import AppInput from './components/AppInput.vue';
import axios from 'axios';
import { store } from './store'

export default {
  name: 'Rick and Morty APP',
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    AppInput
  },
  data() {
    return {
      store,
    }
  },
  created() {
    axios.get(this.store.apiUrl).then((response) => {
      this.store.result = response.data.results;
      this.store.info = response.data.info;
    });
  }
};
</script>

<template>
  <AppHeader />
  <AppInput />
  <AppMain />
  <AppFooter />
</template>


<style></style>