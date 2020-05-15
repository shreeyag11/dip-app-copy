<template>
    <div v-if="this.$store.state.fileParseSucces" 
    class="notification is-primary noti">
        Sucessfully read {{ this.$store.state.file.name }}
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.noti{
    margin-bottom: 0rem !important;
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
    text-align: center;
}
</style>

