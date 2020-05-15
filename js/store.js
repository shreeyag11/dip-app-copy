import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        fileParseSuccessful: false,
        fileParseErrors: undefined,
        file: undefined,
    },
    mutations: {
        ADD_FILE: (state, file) => {
            state.fileParseSuccessful = true;
            state.fileParseErrors = undefined;
            state.file = file;
        },
        ADD_FILE_PARSE_ERRORS: (state, err) => {
            state.fileParseSuccessful = false;
            state.fileParseErrors = err;
            state.file = undefined;
        }
    }
})