import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        fileParseErrors: undefined,
        fileParseSucces: false,
    },
    mutations: {
        ADD_FILE(file){
            state.fileParseSucces= true;
        }
    }
})