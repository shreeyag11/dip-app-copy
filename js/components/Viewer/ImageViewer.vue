<template>
    <div class="viewerDiv has-text-centered">
        <div id="viewerDiv"></div>
    </div>
</template>

<script>
    
export default {
    data: () => ({
        
    }),
    computed: {
        fileParseSuccessful() {
            return this.$store.state.fileParseSuccessful;
        },
        file() {
            return this.$store.state.file;
        }
    },
    mounted() {
        if(this.$store.state.fileParseSuccessful && this.$store.state.file)
            this.fileChanged(this.$store.state.file);
    },
    watch: {
        file(newVal) {
            this.fileChanged(newVal);
        }
    },
    methods: {
        fileChanged(newVal) {
            var viewerDiv = document.getElementById('viewerDiv');
            if(viewerDiv.lastElementChild){
                viewerDiv.removeChild(viewerDiv.lastElementChild);
            }
            const canvas = document.createElement('canvas');
            canvas.width = newVal.width;
            canvas.height = newVal.height;
            var ctx = canvas.getContext("2d");

            ctx.putImageData(
            new ImageData(newVal.pixels, newVal.width, newVal.height),
            0,
            0,
            );

            viewerDiv.appendChild(canvas);
        }
    }
  
}
</script>

<style scoped>
.viewerDiv {
    padding-top: 3 rem;
}
</style>