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
    },
    actions: {
        PARSE_FILE: (dropFiles) => {
            var reader = new FileReader();
            reader.readAsText(dropFiles);  
            reader.onerror = (error) => console.log(error);
            reader.onload = (event) => {
            const text = event.target.result.trim();
            try {
                const header = this._vm.lib.parse_header_json(text);
                header.pixels = new Uint8ClampedArray(this._vm.lib.parse_pixels_json(text));
                header.name = dropFiles.name;
                this.commit('ADD_FILE',header);
            } catch (errors) {
                this.commit('ADD_FILE_PARSE_ERRORS',errors);
            }
            };
        }
    }
})