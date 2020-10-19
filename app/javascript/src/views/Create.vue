<template>
  <div id="post-create">
    <h1>Novo Post</h1>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Title:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.title"
          type="text"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Descrição:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.description"
          type="text"
          required
        ></b-form-input>
      </b-form-group>

      <h6>Conteúdo do Post:</h6>
      <ckeditor
        v-model="form.body"
        :config="editorConfig"
        :editor="editor"
      />

      <br />

      <b-button type="submit" variant="primary">Criar</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import BoldPlugin from '@ckeditor/ckeditor5-basic-styles/src/bold';
import EssentialsPlugin from '@ckeditor/ckeditor5-essentials/src/essentials';
import ItalicPlugin from '@ckeditor/ckeditor5-basic-styles/src/italic';
import LinkPlugin from '@ckeditor/ckeditor5-link/src/link';
import ParagraphPlugin from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';

export default {
  data() {
    return {
      form: {
        title: '',
        description: '',
        body: '<p>Content of the editor.</p>'
      },
      show: true,
      editor: ClassicEditor,
      editorConfig: {
        plugins: [
          BoldPlugin,
          EssentialsPlugin,
          ItalicPlugin,
          LinkPlugin,
          ParagraphPlugin,
          Heading,
          Image,
          ImageStyle,
          ImageUpload,
          Base64UploadAdapter
        ],

        toolbar: {
          items: [ 'heading', '|', 'bold', 'italic', 'link', '|', 'imageUpload', '|', 'undo', 'redo' ],
        },
      }
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(evt) {
      evt.preventDefault()
      this.form.title = ''
      this.form.description = ''
      this.form.body = ''
      this.$nextTick(() => {
        this.show = true
      })
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
