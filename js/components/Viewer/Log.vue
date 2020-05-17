<template>
  <div class="container">
     <article id="logContainer"
    :class="logMessageClass">
      <div id="hint" class="message-header">
        <p>Log</p>
      </div>
      <div id="errorLog" class="message-body" 
      v-if="this.$store.state.fileParseSuccessful">
        <pre>{{ logMessage }}</pre>
      </div>
      <div v-else>
        <pre>{{ logMessage }}</pre>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  computed:{
    fileParseErrors() {
      let error;
      if(this.$store.state.fileParseErrors)
        if(this.$store.state.fileParseErrors.split)
          error = this.$store.state.fileParseErrors.split('#!@');  
      else
        error = this.$store.state.fileParseErrors;
      return error.join('\n');
    },
    logMessageClass() {
      if(this.$store.state.fileParseSuccessful) return 'message is-primary';
      else if(this.$store.state.fileParseErrors) return 'message is-danger';
      else return 'message is-warning'
    },
    logMessage() {
      if(this.$store.state.fileParseSuccessful){
        return [
          `File ${ this.$store.state.file.name } Parsed Successfully`,
          `The type of file is ${ this.$store.state.file.file_type }`,
          `The height of file is ${ this.$store.state.file.height }`,
          `The width of file is ${ this.$store.state.file.width }`
        ].join('\n');
      }
      else if(this.$store.state.fileParseErrors){
        return this.fileParseErrors;
      }
      return undefined;
    }
  }
}
</script>