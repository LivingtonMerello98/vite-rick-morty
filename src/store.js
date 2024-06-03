import { reactive } from 'vue';

export const store = reactive({
    result: [],
    info: {},
    apiUrl: 'https://rickandmortyapi.com/api/character',
});
