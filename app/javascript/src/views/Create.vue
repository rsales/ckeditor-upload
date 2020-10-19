<template>
  <div id="post-create">
    <h1>NOVO POST</h1>
    <ckeditor :editor="editor" v-model="editorData" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      editor: ClassicEditor,
      editorData: '<p>Content of the editor.</p>',
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
