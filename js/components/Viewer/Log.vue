<template>
  <div class="container">
    <article
      id="logContainer is-danger"
    >
      <div
        id="hint"
        class="message-header"
      >
        <p>Log</p>
      </div>
    
      <div
        id="errorLog"
        class="message-body"
        v-if="this.$store.state.fileParseErrors"
      >
        <p v-for="err in this.$store.state.fileParseErrors" :key="err">
          {{ err }}      
        </p>
       
      </div>
    </article>
  </div>
</template>

<script>
export default {
    
}
</script>