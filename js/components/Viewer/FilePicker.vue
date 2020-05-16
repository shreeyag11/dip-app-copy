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
                dropFiles: undefined,
            }
        },
        methods: {
            parseFile() {
               this.$store.dispatch('PARSE_FILE',this.dropFiles);
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
