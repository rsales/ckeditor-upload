<template>
  <div class="pt-3" id="post-edit">
    <router-link :to="{ name: 'Posts'}">👈 Voltar</router-link>
    <h1>Editar Post #{{ this.$route.params.id  }}</h1>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Título:"
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

      <b-button type="submit" variant="primary">Editar</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { PostDataService } from '../services';

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
      submitted: false,
      errors: [],
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
  created() {
    this.getPost(this.$route.params.id);
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      this.savePost()
    },
    onReset(evt) {
      evt.preventDefault()
      this.form.title = ''
      this.form.description = ''
      this.form.body = '<p>Content of the editor.</p>'
      this.$nextTick(() => {
        this.show = true
      })
    },
    getPost(id) {
      PostDataService.get(id)
        .then(response => {
          this.form = response.data
        })
        .catch(e => {
          this.errors.push(e)
        });
    },
    savePost() {
      var data = JSON.stringify(this.form);
      var id = this.$route.params.id;

      PostDataService.update(id, data)
        .then(response => {
          var postId = response.data.id;
          this.submitted = true;
          this.$router.push({ name: 'Post', params: { id: postId }});
        })
        .catch(e => {
          this.submitted = false;
          this.errors.push(e)
        });
    }
  }
}
</script>