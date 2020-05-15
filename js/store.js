import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        fileParseSucces: false,
        fileParseErrors: undefined,
        file: undefined,
    },
    mutations: {
        ADD_FILE: (state, file) => {
            console.log("inside store:",file);
            state.fileParseSucces = true;
            state.fileParseErrors = undefined;
            state.file = file;
        },
        ADD_FILE_PARSE_ERRORS: (state, err) => {
            state.fileParseSucces = false;
            state.fileParseErrors = err;
            state.file = undefined;
        }
    }
})