<template>
  <div class="pt-3" id="posts">
    <router-link :to="{ name: 'Posts'}">👈 Voltar</router-link>
    <router-link class="float-right" :to="{name: 'PostEdit', params: { id: post.id }}">✍️ Editar post {{ post.id }}</router-link>
    <h1 class="mt-3">{{ post.title }}</h1>
    <p>{{ post.description }}</p>
    <hr />
    <section class="content-post" v-html="post.body" />
  </div>
</template>

<script>
import { PostDataService } from '../services';

export default {
  name: 'PagePosts',
  data() {
    return {
      post: {},
      errors: []
    }
  },
  created() {
    this.getPost(this.$route.params.id);
  },
  methods: {
    getPost(id) {
      PostDataService.get(id)
        .then(response => {
          this.post = response.data
        })
        .catch(e => {
          this.errors.push(e)
        });
    }
  }
}
</script>