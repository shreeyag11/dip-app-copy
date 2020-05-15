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
            parseFile() {
                var reader = new FileReader();
                reader.readAsText(this.dropFiles);  
                reader.onerror = (error) => console.log(error);
                reader.onload = (event) => {
                const text = event.target.result.trim();
                try {
                    const header = this.lib.parse_header_json(text);
                    header.pixels = new Uint8ClampedArray(this.lib.parse_pixels_json(text));
                    header.name = this.dropFiles.name;
                    this.$store.commit('ADD_FILE',header);
                } catch (errors) {
                    console.log(errors);
                    this.$store.commit('ADD_FILE_PARSE_ERRORS',errors.split('#!@'));
                }
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
