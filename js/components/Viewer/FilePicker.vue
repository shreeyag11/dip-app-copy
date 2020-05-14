<template>
    <div class="container">
    <section>
        <b-field >
            <b-upload v-model="dropFiles"
                drag-drop 
                @input="parseFile">
                <section class="section">
                    <div class="content has-text-centered">
                        <p>
                            <b-icon
                                icon="upload"
                                size="is-large">
                            </b-icon>
                        </p>
                        <p>Drop your files here or click to upload</p>
                    </div>
                </section>
            </b-upload>
        </b-field>
    </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                dropFiles: undefined
            }
        },
        methods: {
            parseFile: function () {
                var reader = new FileReader();
                reader.readAsText(this.dropFiles);  
                reader.onerror = function(event) {
                    console.error("File could not be read! Code " + event.target.error.code);
                }; 
                reader.onload = function(event) {
                var contents = event.target.result.trim();
                try{
                    const header = this._vm.lib.parse_header_json(text);
                    header.pixels = new Uint8ClampedArray(this._vm.lib.parse_pixels);
                    console.log("header:",header)
                }catch(error){
                    console.log(error);
                }
                // this.$store.commit('ADD_FILE', this.dropFiles);
                };
                
            }
        }
    }
</script>

<style scoped>
.upload{
    width: 100%;
    display: block;
}
</style>
